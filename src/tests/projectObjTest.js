
import projectObj from '../project.js';
import TodoObj from '../todoObj.js';

function projectObjTest() {

    console.log(`Testing projectObj.js Functions
    Functions to test:
    getInfo
    init
    getProjectName
    setProjectName
    getProjectCreationDate
    setProjectCreationDate
    getProjectDueDate
    setProjectDueDate
    getTodoList
    setTodoList
    addTodo
    removeTodo
    reorderTodo
    ----------------------------------------`)

    
    console.log(`Testing projectObj constructor`);
    let testProject = projectObj();
    console.log(testProject);
    
    console.log(`testing getInfo`);
    console.log(testProject.getInfo());

    console.log(`testing init: `);
    console.log(testProject.init('Sample Project For Internal Use Only', [TodoObj()], new Date('2022-02-02'), new Date('2022-02-04'), 3, "div"));
    console.log(testProject.getInfo());

    console.log('testing getProjectName: ' + testProject.getProjectName());
    console.log(testProject.getInfo());

    console.log('testing setProjectName with invalid entity: ' + testProject.setProjectName([5]));
    console.log(testProject.getProjectName());

    console.log('testing setProjectName with valid entry: ' + testProject.setProjectName('New Sample Project Name'));
    console.log(testProject.getProjectName());

    console.log('----------------------------------------------');
    console.log('----------------------------------------------');
    console.log('----------------------------------------------');
    
    console.log('testing getProjectCreationDate: ' + testProject.getProjectCreationDate());
    console.log(testProject.getInfo());

    console.log('testing setProjectCreationDate with invalid entry: ' + testProject.setProjectCreationDate('tuesday'));
    console.log(testProject.getProjectCreationDate());

    console.log('testing setProjectCreationDate with valid entry: ' + testProject.setProjectCreationDate(new Date('1991-11-13')));
    console.log(testProject.getProjectCreationDate());



    console.log('-----------------------testing projectDueDate')
    
    console.log('testing getProjectDueDate: ' + testProject.getProjectDueDate());
    console.log(testProject.getInfo());

    console.log('testing setProjectDueDate with invalid entry: ' + testProject.setProjectDueDate('thursday'));
    console.log(testProject.getProjectDueDate());

    console.log('testing setProjectDueDate with valid entry: ' + testProject.setProjectDueDate(new Date('2023-01-01')));
    console.log(testProject.getProjectDueDate());


    console.log('----------------------------------------------');
    console.log('----------------------------------------------');
    console.log('----------------------------------------------');
    
    console.log('testing getTodoList: ' + testProject.getTodoList());
    console.log(testProject.getTodoList()); 

    const sampleTodo = TodoObj();
    sampleTodo.init("Sample To Do", "I am a sample", new Date('2022-02-04'), new Date('2022-02-02'), 5, "These are my notes", {work: true}, false, "div");

    console.log(`testing setTodoList: ` + testProject.setTodoList(sampleTodo));
    console.log(testProject.getTodoList());
    console.log(testProject.getTodoList()[0].getInfo());

    console.log('testing addTodoList: ' + testProject.addTodo("New To do", "I am new", new Date('2022-02-08'), new Date('2022-02-01'), 5, "How do you do, fellow to do", {play: true}, false, "div"));
    console.log(testProject.getTodoList());
    console.log(testProject.getTodoList()[0].getInfo());
    console.log(testProject.getTodoList()[1].getInfo());

    console.log(typeof sampleTodo);

    const newTodo = TodoObj();
    newTodo.init("New To do two: Electric to do-aloo", "I am new", new Date('2022-02-08'), new Date('2022-02-01'), 5, "How do you do, fellow to do", {play: true}, false, "div");


    console.log('testing addTodoObj: ' + testProject.addTodoObj(newTodo));
    console.log(testProject.getTodoList());
    console.log(testProject.getTodoList()[0].getInfo());
    console.log(testProject.getTodoList()[1].getInfo());
    console.log(testProject.getTodoList()[2].getInfo());

    console.log('testing removeTodo: ' + testProject.removeTodo(0));
    console.log(testProject.getTodoList());
    console.log(testProject.getTodoList()[0].getInfo());
    console.log(testProject.getTodoList()[1].getInfo());
        
    testProject.setTodoList({zero: false});
    testProject.addTodoObj({one: false});
    testProject.addTodoObj({two: false});
    testProject.addTodoObj({three: false});
    // console.log(testProject.getTodoList());

    console.log('testing reorderTodo with invalid target and destination ints: ' + testProject.reorderTodo(8, 5));
    console.log(testProject.getTodoList());

    console.log('testing reorderTodo with valid target and destination ints: ' + testProject.reorderTodo(0, 3));
    console.log(testProject.getTodoList());
    testProject.getTodoList().forEach(element => {
        for (const key of Object.entries(element)) {
            console.log(`${key}`);
        }
    });

    console.log('testing reorderTodo with valid target and destination ints: ' + testProject.reorderTodo(3, 2));
    testProject.getTodoList().forEach(element => {
        for (const key of Object.entries(element)) {
            console.log(`${key}`);
        }
    });
    console.log(testProject.getTodoList());



    return true;
}

export default projectObjTest;
