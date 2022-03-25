
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
    let _todoDiv;
    let _todoDeletionDiv;

    const getInfo = () => {
        // console.log('_checklist contents: ');
        // console.log(getChecklist());
        return `                _title: ${_title}
                _description: ${_description}
                _dueDate: ${_dueDate}
                _creationDate: ${_creationDate}
                _priority: ${_priority}
                _notes: ${_notes}
                _checklist: ${_checklist}
                _complete: ${_complete}
                _todoDiv: ${_todoDiv}`

    }

    // In a perfect world, init assigns these properties through their relevant setters for type-checking
    const init = (title, description, dueDate, creationDate, priority, notes, checklist, complete, todoDiv) => {
        _title = title;
        _description = description;
        _dueDate = dueDate;
        _creationDate = creationDate;
        _priority = priority;
        _notes = notes;
        _checklist = checklist;
        _complete = complete;
        _todoDiv = todoDiv;
    }

    const getTitle = () => {
        return _title;
    }

    const setTitle = (_newTitle) => {
        if( typeof _newTitle === "string") {
            _title = _newTitle; 
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
            _description = newDesc; 
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
            _dueDate = newDueDate; 
        } else {
            console.log('todoObj.setDueDate Error! tried to pass a non-string into the _dueDate field!')
        }
    }

    const getCreationDate = () => {
        return _creationDate;
    }

    const setCreationDate = (newCreationDate) => {
        if( isDate(newCreationDate)) {
            _creationDate = newCreationDate; 
        } else {
            console.log('todoObj.setCreationDate Error! tried to pass a non-date into the _creationDate field!')
        }
    }

    const getPriority = () => {
        return _priority;
    }

    const setPriority = (newPriority) => {
        if( typeof newPriority === "number" ) {
            _priority = newPriority; 
        } else 
            console.log('todoObj.setPriorty Error! tried to pass a non-number into the _priority field!')
    }
    
    const getNotes = () => {
        return _notes;
    }

    const setNotes = (newNotes) => {
        if( typeof newNotes === "string") {
            _notes = newNotes; 
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

    const addItemToChecklist = (newItem, check) => {
        if( typeof newItem === "string") {

            Object.defineProperty(_checklist, newItem, {
                enumerale: true,
                writable: true,
                configurable: true,
                value: check
            })
            return true;
        } else {
            console.log('todoObj.addItemToChecklist Error! tried to pass a non-string as a newItem for _checklist!');
            return false;
        }
    }

    const deleteItemOffChecklist = (item) => {
        if (typeof item === "string") {

            if(_checklist.hasOwnProperty(item)) {
                delete _checklist[item];
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

    const toggleItemInChecklist = (property) => {
        if(_checklist.hasOwnProperty(property) ) {
            if( _checklist[property] ) {
                _checklist[property] = false;
                return true;
            } else {
                _checklist[property] = true;
                return true;
            }
        } else {
            console.log('todoObj.toggleItemInChecklist Error! _checklist does not have property: ' + property);
            return false;
        }
    }

    const getComplete = () => {
        return _complete;
    }

    const setComplete = (newComplete) => {
        if( typeof newComplete === "boolean") {
            _complete = newComplete; 
            return true;
        } else {
            console.log('todoObj._setComplete Error! tried to pass a non-booelan into the _complete field!');
            return false;
        }
    }

    const getTodoDiv = () => {
        return _todoDiv;
    }

    const setTodoDiv = (newDiv) => {
        _todoDiv = newDiv;
        return true;
    }

    const getTodoDeletionDiv = () => {
        return _todoDeletionDiv;
    }

    const setTodoDeletionDiv = (newDiv) => {
        _todoDeletionDiv = newDiv;
        return true;
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
        getChecklist, setChecklist, addItemToChecklist, deleteItemOffChecklist, toggleItemInChecklist,
        getComplete, setComplete,
        getTodoDiv, setTodoDiv,
        getTodoDeletionDiv, setTodoDeletionDiv,


        
    }


};

export default todoObj;