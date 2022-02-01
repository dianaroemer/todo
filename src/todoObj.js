
import {format, toDate, isDate} from 'date-fns';

const todoObj = () => {

    let _title;
    let _description;
    let _dueDate;
    let _creationDate;
    let _priority;
    let _notes;
    let _checklist;
    let _complete;

    const getInfo = () => {
        return `                _title: ${_title}
                _description: ${_description}
                _dueDate: ${_dueDate}
                _creationDate: ${_creationDate}
                _priority: ${_priority}
                _notes: ${_notes}
                _checklistk: ${_checklist}
                _complete: ${_complete}`
    }

    const init = (_title, _description, _dueDate, _creationDate, _priority, _notes, _checklist, _complete) => {
        this._title = _title;
        this._description = _description;
        this._dueDate = _dueDate;
        this._creationDate = _creationDate;
        this._priority = _priority;
        this._notes = _notes;
        this._checklist = _checklist;
        this._complete = _complete;
    }

    const getTitle = () => {
        return _title;
    }

    const setTitle = (_newTitle) => {
        if( typeof _newTitle === "string") {
            this._title = _newTitle; 
            return true;
        } else {
            console.log('todoObj._setTitle Error! tried to pass a non-string into the _title field!');
            return false;
        }
    }

    const getDescription = () => {
        return _description;
    }

    const setDescription = (newDesc) => {
        if( typeof newDesc === "string") {
            this._description = newDesc; 
            return true;
        } else {
            console.log('todoObj.setDescription Error! tried to pass a non-string into the _description field!');
            return false;
        }
    }

    const getDueDate = () => {
        return _dueDate;
    }

    const setDueDate = (newDueDate) => {
        if( isDate(newDueDate)) {
            this._dueDate = newDueDate; 
        } else {
            console.log('todoObj.setDueDate Error! tried to pass a non-string into the _dueDate field!')
        }
    }

    const getCreationDate = () => {
        return _creationDate;
    }

    const setCreationDate = (newCreationDate) => {
        if( isDate(newCreationDate)) {
            this._creationDate = newCreationDate; 
        } else {
            console.log('todoObj.setCreationDate Error! tried to pass a non-date into the _creationDate field!')
        }
    }

    const getPriority = () => {
        return _priority;
    }

    const setPriority = (newPriority) => {
        if( typeof newPriority === "number" ) {
            this._priority = newPriority; 
        } else 
            console.log('todoObj.setPriorty Error! tried to pass a non-number into the _priority field!')
    }
    
    const getNotes = () => {
        return _notes;
    }

    const setNotes = (newNotes) => {
        if( typeof newNotes === "string") {
            this._notes = newNotes; 
            return true;
        } else {
            console.log('todoObj.setNotes Error! tried to pass a non-string into the _notes field!');
            return false;
        }
    }

    const getChecklist = () => {
        return _checklist;
    }

    const setChecklist = (newChecklist) => {
        if( typeof newChecklist === "object" ) {
            _checklist = newChecklist;
            return true;
        } else {
            console.log('todoObj.setChecklist Error! tried to pass a non-object into the _checklist field!');
            return false;
        }
    }

    const enumerateChecklist = () => {
        for (const item in _checklist) {
            console.log(item);
        }
    }

    const addItemToChecklist = (newItem, check) => {
        if( typeof newItem === "string") {
            _checklist.newItem = check;
            return true;
        } else {
            console.log('todoObj.addItemToChecklist Error! tried to pass a non-string as a newItem for _checklist!');
            return false;
        }
    }

    const deleteItemOffChecklist = (item) => {
        if (typeof item === "string") {

            if(_checklist.hasOwnProperty(item)) {
                delete _checklist.item;
                return true;
            } else {
                console.log(`todoObj.deleteItemOffChecklist Error! _checklist.${item} not found as a property in _checklist!`)
                return false;
            }

        } else {
            console.log('todoObj.deleteItemOffChecklist Error! Tried to pass a non-string into propertys hasOwnProperty!');
            return false;
        }
    }

    const getComplete = () => {
        return _complete;
    }

    const setComplete = (newComplete) => {
        if( typeof newComplete === "boolean") {
            this._complete = newComplete; 
            return true;
        } else {
            console.log('todoObj._setComplete Error! tried to pass a non-booelan into the _complete field!');
            return false;
        }
    }


    return {
        getInfo,
        init,
        getTitle, setTitle,
        getDescription, setDescription,
        getDueDate, setDueDate,
        getCreationDate, setCreationDate,
        getPriority, setPriority,
        getNotes, setNotes,
        getChecklist, setChecklist, enumerateChecklist, addItemToChecklist, deleteItemOffChecklist,
        getComplete, setComplete,
        



        
    }


};

export default todoObj;