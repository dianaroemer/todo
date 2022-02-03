import TodoObj from './todoObj.js';

function todoTest() {

    console.log("Testing To Do Object and Functionality");
    console.log('testing creation of new todo object');
    let sampleToDo = TodoObj();
    console.log(sampleToDo);

    console.log('testing sampleToDo.getInfo()');
    console.log(sampleToDo.getInfo());
    

    console.log('testing object write access');
    sampleToDo._title = "test";
    console.log(sampleToDo._title);
    console.log(sampleToDo.getInfo());

    console.log('testing object write access with correct setter functions');
    console.log(sampleToDo.setTitle('Sample'));
    console.log('new title is: ' + sampleToDo.getTitle());

    console.log('testing title retrieval without getter fnct');
    console.log('Test title: ' + sampleToDo._title);

    console.log('--------------------------------');
    console.log('testing init function');
    sampleToDo.init("New Title", "I am a sample", new Date('2022-02-04'), new Date('2022-02-02'), 5, "These are my notes", {work: true}, false);
    // _title, _description, _dueDate, _creationDate, _priority, _notes, _checklist, _complete
    console.log(sampleToDo.getInfo());

    console.log('--------------------------------');
    console.log('testing checklist getter and setter');
    console.log(sampleToDo.getChecklist());

    console.log(sampleToDo.setChecklist({play: false}));
    console.log(sampleToDo.getChecklist());

    console.log('testing addItemToChecklist');
    console.log(sampleToDo.addItemToChecklist('dull', false));
    console.log(sampleToDo.getChecklist());

    console.log('--------------------------------');
    console.log('testing non-applicable deleteItemFromChecklist');
    console.log(sampleToDo.deleteItemOffChecklist('work'));
    console.log(sampleToDo.getChecklist());

    console.log('testing applicable deleteItemFromChecklist');
    console.log(sampleToDo.deleteItemOffChecklist('dull'));
    console.log(sampleToDo.getChecklist());

    console.log('--------------------------------');
    console.log('testing toggleItemInChecklist with non-applicable property');
    console.log(sampleToDo.toggleItemInChecklist('work'));
    console.log(sampleToDo.getChecklist());

    console.log('testing toggleItemInChecklist with applicable property');
    console.log(sampleToDo.toggleItemInChecklist('play'));
    console.log(sampleToDo.getChecklist());

    console.log('--------------------------------');
    console.log(sampleToDo.getInfo());

    console.log("testing enumerability of properties in _checklist");
    console.log(sampleToDo.getChecklist().propertyIsEnumerable('play'));




    // console.log('------------------------------------------------------------');
    // console.log(sampleToDo.getInfo());

    return true;

}

export default todoTest;