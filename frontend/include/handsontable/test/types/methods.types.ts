import * as Handsontable from 'handsontable';

const elem = document.createElement('div');
const hot = new Handsontable(elem, {});

hot.addHook('foo', [() => {}]);
hot.addHook('foo', () => {});
hot.addHookOnce('foo', [() => {}]);
hot.addHookOnce('foo', () => {});
hot.alter('insert_row', 123, 123, 'foo', true);
hot.alter('insert_row');
hot.clear();
hot.colOffset();
hot.colToProp(123);
hot.countCols();
hot.countEmptyCols(true);
hot.countEmptyRows(true);
hot.countRenderedCols();
hot.countRenderedRows();
hot.countRows();
hot.countSourceRows();
hot.countVisibleCols();
hot.countVisibleRows();
hot.deselectCell();
hot.destroy();
hot.destroyEditor(true);
hot.emptySelectedCells();
hot.getActiveEditor();
hot.getCell(123, 123, true);
hot.getCellEditor(123, 123);
hot.getCellMeta(123, 123);
hot.getCellRenderer(123, 123);
hot.getCellValidator(123, 123);
hot.getColHeader(123);
hot.getColWidth(123);
hot.getCoords(elem.querySelector('td'));
hot.getCopyableData(123, 123);
hot.getCopyableText(123, 123, 123, 123);
hot.getData(123, 123, 123, 123);
hot.getDataAtCell(123, 123);
hot.getDataAtCol(123);
hot.getDataAtProp(123);
hot.getDataAtRow(123);
hot.getDataAtRowProp(123, 'foo');
hot.getDataType(123, 123, 123, 123);
hot.getInstance();
hot.getRowHeader(123);
hot.getRowHeight(123);
hot.getSchema();
hot.getSelected();
hot.getSelectedLast();
hot.getSelectedRange();
hot.getSelectedRangeLast();
hot.getSettings();
hot.getSourceData(123, 123, 123, 123);
hot.getSourceDataAtCell(123, 123);
hot.getSourceDataAtCol(123);
hot.getSourceDataAtRow(123);
hot.getValue();
hot.hasColHeaders();
hot.hasHook('foo');
hot.hasRowHeaders();
hot.isEmptyCol(123);
hot.isEmptyRow(123);
hot.isListening();
hot.listen();
hot.loadData([]);
hot.populateFromArray(123, 123, [], 123, 123, 'foo', 'foo', 'foo', []);
hot.propToCol('foo');
hot.propToCol(123);
hot.removeCellMeta(123, 123, 'foo');
hot.removeHook('foo', function() {});
hot.render();
hot.rowOffset();
hot.runHooks('foo', 123, 'foo', true, {}, [], function() {});
hot.selectAll();
hot.selectCell(123, 123, 123, 123, true, true);
hot.selectCellByProp(123, 'foo', 123, 'foo', true);
hot.selectCells([[123, 'prop1', 123, 'prop2']], true, true);
hot.selectCells([[123, 123, 123, 123]], true, true);
hot.selectColumns(1, 4);
hot.selectColumns(1);
hot.selectRows(1, 4);
hot.selectRows(1);
hot.setCellMeta(123, 123, 'foo', 'foo');
hot.setCellMetaObject(123, 123, {});
hot.setDataAtCell(123, 123, 'foo', 'foo');
hot.setDataAtCell(123, 123, {myProperty: 'foo'}, 'foo');
hot.setDataAtCell([[123, 123, 'foo'], [123, 123, {myProperty: 'foo'}]], 'foo');
hot.setDataAtRowProp(123, 'foo', 'foo', 'foo');
hot.setDataAtRowProp([[123, 'foo', 'foo'], [123, 'foo', 'foo']], 'foo');
hot.spliceCol(123, 123, 123, 'foo');
hot.spliceRow(123, 123, 123, 'foo');
hot.unlisten();
hot.updateSettings({}, true);
hot.validateCells(function() {});

const autoColumnSize: Handsontable.plugins.AutoColumnSize = hot.getPlugin('autoColumnSize');
const autoRowSize: Handsontable.plugins.AutoRowSize = hot.getPlugin('autoRowSize');
const autofill: Handsontable.plugins.Autofill = hot.getPlugin('autofill');
const bindeRowsWithHeaders: Handsontable.plugins.BindRowsWithHeaders = hot.getPlugin('bindRowsWithHeaders');
const collapsibleColumns: Handsontable.plugins.CollapsibleColumns = hot.getPlugin('collapsibleColumns');
const columnSorting: Handsontable.plugins.ColumnSorting = hot.getPlugin('columnSorting');
const columnSummary: Handsontable.plugins.ColumnSummary = hot.getPlugin('columnSummary');
const comments: Handsontable.plugins.Comments = hot.getPlugin('comments');
const contextMenu: Handsontable.plugins.ContextMenu = hot.getPlugin('contextMenu');
const copyPaste: Handsontable.plugins.CopyPaste = hot.getPlugin('copyPaste');
const dragToScroll: Handsontable.plugins.DragToScroll = hot.getPlugin('dragToScroll');
const dropdownMenu: Handsontable.plugins.DropdownMenu = hot.getPlugin('dropdownMenu');
const exportFile: Handsontable.plugins.ExportFile = hot.getPlugin('exportFile');
const filters: Handsontable.plugins.Filters = hot.getPlugin('filters');
const headerTooltips: Handsontable.plugins.HeaderTooltips = hot.getPlugin('headerTooltips');
const hiddenColumns: Handsontable.plugins.HiddenColumns = hot.getPlugin('hiddenColumns');
const hiddenRows: Handsontable.plugins.HiddenRows = hot.getPlugin('hiddenRows');
const manualColumnFreeze: Handsontable.plugins.ManualColumnFreeze = hot.getPlugin('manualColumnFreeze');
const manualColumnMove: Handsontable.plugins.ManualColumnMove = hot.getPlugin('manualColumnMove');
const manualRowMove: Handsontable.plugins.ManualRowMove = hot.getPlugin('manualRowMove');
const manualRowResize: Handsontable.plugins.ManualRowResize = hot.getPlugin('manualRowResize');
const mergeCells: Handsontable.plugins.MergeCells = hot.getPlugin('mergeCells');
const multiColumnSorting: Handsontable.plugins.MultiColumnSorting = hot.getPlugin('multiColumnSorting');
const nestedHeaders: Handsontable.plugins.NestedHeaders = hot.getPlugin('nestedHeaders');
const observeChanges: Handsontable.plugins.ObserveChanges = hot.getPlugin('observeChanges');
const search: Handsontable.plugins.Search = hot.getPlugin('search');
const trimeRows: Handsontable.plugins.TrimRows = hot.getPlugin('trimRows');
const formulas: Handsontable.plugins.Formulas = hot.getPlugin('formulas');
const ganttChart: Handsontable.plugins.GanttChart = hot.getPlugin('ganttChart');
const nestedRows: Handsontable.plugins.NestedRows = hot.getPlugin('nestedRows');

autoColumnSize.samplesGenerator.setSampleCount(5);
