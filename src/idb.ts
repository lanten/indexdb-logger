import { checkBrowserIDB_API } from './browser-shits'

const idbCheckResult = checkBrowserIDB_API()

if (idbCheckResult) {
  console.warn(idbCheckResult)
}

var db
export function openDB() {
  var DBOpenRequest = window.indexedDB.open('toDoList')
  DBOpenRequest.onsuccess = function (e) {
    db = DBOpenRequest.result
    console.log({ e, DBOpenRequest })
  }

  DBOpenRequest.onerror = (err) => {
    console.log(err)
  }
}
