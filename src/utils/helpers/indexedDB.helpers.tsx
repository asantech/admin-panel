interface IndexDBParams {
  name: string;
  version?: number;
  dbsMap: any;
}

export const InitIndexDB = ({ name, version, dbsMap }: IndexDBParams) => {
  let openRequest = indexedDB.open(name, version ?? 1);

  openRequest.onupgradeneeded = function (event) {
    switch (
      event.oldVersion // existing db version
    ) {
      case 0:
      case 1:
        let db = openRequest.result;
        dbsMap.setItem(name, db);
        break;
      default:
      // client had version 1
      // update
    }
  };

  openRequest.onerror = function () {
    console.error('Error', openRequest.error);
  };

  openRequest.onsuccess = function () {
    let db = openRequest.result;

    db.onversionchange = function () {
      db.close();
      console.log('Database is outdated, please reload the page.');
    };
  };
};
