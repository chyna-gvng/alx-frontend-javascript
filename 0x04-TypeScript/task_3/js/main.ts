import {RowID, RowElement} from './interface';
import * as CRUD from './crud';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
}

const newRowID: RowID = CRUD.insertRow;
const updatedRow: RowElement = {...row, age: 23};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
