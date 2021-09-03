/** 
 * 检测并尝试修复浏览器 IDB API 支持
 */
export function checkBrowserIDB_API(): string | undefined {
  if (!window.indexedDB) {
    // @ts-ignore
    window.indexedDB = window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB

    if (!window.indexedDB) return 'IDB API Not supported: indexedDB'
  }

  if (!window.IDBTransaction) {
    // @ts-ignore
    window.IDBTransaction = window.webkitIDBTransaction || window.msIDBTransaction

    if (!window.IDBTransaction) return 'IDB API Not supported: IDBTransaction'
  }

  if (!window.IDBKeyRange) {
    // @ts-ignore
    window.IDBKeyRange = window.webkitIDBKeyRange || window.msIDBKeyRange

    if (!window.IDBKeyRange) return 'IDB API Not supported: IDBKeyRange'
  }
}
