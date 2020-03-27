import { getPropByPath } from "../../../utils/util";

export const cellStarts = {
  default: {
    order: ""
  },
  selection: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: "",
    className: "ml-table-column--selection"
  },
  expand: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  }
};

// 这些选项不应该被覆盖
export const cellForced = {
  selection: {
    renderHeader: function(h, { store }) {
      return h("ml-checkbox", {
        props: {
          disabled: store.states.data && store.states.data.length === 0,
          indeterminate:
            store.states.selection.length > 0 && !this.isAllSelected,
          value: this.isAllSelected
        },
        nativeOn: {
          click: this.toggleAllSelection
        }
      });
    },
    renderCell: function(h, { row, column, store, $index }) {
      return h("ml-checkbox", {
        props: {
          disabled: column.selectable
            ? !column.selectable.call(null, row, $index)
            : false,
          value: store.isSelected(row)
        },
        nativeOn: {
          click: e => {
            e.stopPropagation();
          }
        },
        on: {
          input: () => {
            store.commit("rowSelectedChanged", row);
          }
        }
      });
    },
    sortable: false,
    resizable: false
  },
  index: {
    renderHeader: function(h, { column }) {
      return column.label || "#";
    },
    renderCell: function(h, { $index, column }) {
      let i = $index + 1;
      const index = column.index;

      if (typeof index === "number") {
        i = $index + index;
      } else if (typeof index === "function") {
        i = index($index);
      }

      return h("div", i);
    },
    sortable: false
  },
  expand: {
    renderHeader: function(h, { column }) {
      return column.label || "";
    },
    renderCell: function(h, { row, store }) {
      const classes = ["ml-table__expand-icon"];
      if (store.states.expandRows.indexOf(row) > -1) {
        classes.push("ml-table__expand-icon--expanded");
      }
      const callback = function(e) {
        e.stopPropagation();
        store.toggleRowExpansion(row);
      };
      return h("div", { class: classes, on: { click: callback } }, [
        h("i", { class: "ml-icon ml-icon-arrow-right" })
      ]);
      // return (
      //   <div class={classes} on-click={callback}>
      //     <i class="ml-icon ml-icon-arrow-right"></i>
      //   </div>
      // );
    },
    sortable: false,
    resizable: false,
    className: "ml-table__expand-column"
  }
};

export function defaultRenderCell(h, { row, column, $index }) {
  const property = column.property;
  const value = property && getPropByPath(row, property).v;
  if (column && column.formatter) {
    return column.formatter(row, column, value, $index);
  }
  return value;
}

export function treeCellPrefix(h, { row, treeNode, store }) {
  if (!treeNode) return null;
  const ele = [];
  const callback = function(e) {
    e.stopPropagation();
    store.loadOrToggle(row);
  };
  if (treeNode.indent) {
    ele.push(
      h("span", {
        class: "ml-table__indent",
        style: { "padding-left": treeNode.indent + "px" }
      })
    );
  }
  if (typeof treeNode.expanded === "boolean" && !treeNode.noLazyChildren) {
    const expandClasses = [
      "ml-table__expand-icon",
      treeNode.expanded ? "ml-table__expand-icon--expanded" : ""
    ];
    let iconClasses = ["ml-icon-arrow-right"];
    if (treeNode.loading) {
      iconClasses = ["ml-icon-loading"];
    }
    ele.push(
      h("div", { class: expandClasses, on: { click: callback } }, [
        h("i", { class: iconClasses })
      ])
    );
  } else {
    ele.push(h("span", { class: "ml-table__placeholder" }));
  }
  return ele;
}
