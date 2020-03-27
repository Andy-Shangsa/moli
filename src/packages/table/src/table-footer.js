import LayoutObserver from "./layout-observer";
import { mapStates } from "./store/helper";

export default {
  name: "MlTableFooter",

  mixins: [LayoutObserver],

  render(h) {
    let sums = [];
    if (this.summaryMethod) {
      sums = this.summaryMethod({
        columns: this.columns,
        data: this.store.states.data
      });
    } else {
      this.columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = this.sumText;
          return;
        }
        const values = this.store.states.data.map(item =>
          Number(item[column.property])
        );
        const precisions = [];
        let notNumber = true;
        values.forEach(value => {
          if (!isNaN(value)) {
            notNumber = false;
            let decimal = ("" + value).split(".")[1];
            precisions.push(decimal ? decimal.length : 0);
          }
        });
        const precision = Math.max.apply(null, precisions);
        if (!notNumber) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return parseFloat((prev + curr).toFixed(Math.min(precision, 20)));
            } else {
              return prev;
            }
          }, 0);
        } else {
          sums[index] = "";
        }
      });
    }

    const elCol = this.columns.map(column => {
      return h("col", { attrs: { name: column.id, key: column.id } });
    });

    return h(
      "table",
      {
        class: "ml-table__footer",
        attrs: { cellspacing: 0, cellpadding: 0, border: 0 }
      },
      [
        h("colgroup", [
          ...elCol,
          this.hasGutter ? h("col", { attrs: { name: "gutter" } }) : ""
        ]),
        h(
          "tbody",
          {
            class: [{ "has-gutter": this.hasGutter }]
          },
          [
            h("tr", [
              ...this.columns.map((column, cellIndex) => {
                return h(
                  "td",
                  {
                    key: cellIndex,
                    class: this.getRowClasses(column, cellIndex),
                    attrs: { colSpan: column.colSpan, rowSpan: column.rowSpan }
                  },
                  [
                    h(
                      "div",
                      { class: ["cell", column.labelClassName] },
                      sums[cellIndex]
                    ),
                    this.hasGutter ? h("th", { class: "gutter" }) : null
                  ]
                );
              })
            ])
          ]
        )
      ]
    );
  },

  props: {
    fixed: String,
    store: {
      required: true
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default() {
        return {
          prop: "",
          order: ""
        };
      }
    }
  },

  computed: {
    table() {
      return this.$parent;
    },

    hasGutter() {
      return !this.fixed && this.tableLayout.gutterWidth;
    },

    ...mapStates({
      columns: "columns",
      isAllSelected: "isAllSelected",
      leftFixedLeafCount: "fixedLeafColumnsLength",
      rightFixedLeafCount: "rightFixedLeafColumnsLength",
      columnsCount: states => states.columns.length,
      leftFixedCount: states => states.fixedColumns.length,
      rightFixedCount: states => states.rightFixedColumns.length
    })
  },

  methods: {
    isCellHidden(index, columns, column) {
      if (this.fixed === true || this.fixed === "left") {
        return index >= this.leftFixedLeafCount;
      } else if (this.fixed === "right") {
        let before = 0;
        for (let i = 0; i < index; i++) {
          before += columns[i].colSpan;
        }
        return before < this.columnsCount - this.rightFixedLeafCount;
      } else if (!this.fixed && column.fixed) {
        // hide cell when footer instance is not fixed and column is fixed
        return true;
      } else {
        return (
          index < this.leftFixedCount ||
          index >= this.columnsCount - this.rightFixedCount
        );
      }
    },

    getRowClasses(column, cellIndex) {
      const classes = [column.id, column.align, column.labelClassName];
      if (column.className) {
        classes.push(column.className);
      }
      if (this.isCellHidden(cellIndex, this.columns, column)) {
        classes.push("is-hidden");
      }
      if (!column.children) {
        classes.push("is-leaf");
      }
      return classes;
    }
  }
};
