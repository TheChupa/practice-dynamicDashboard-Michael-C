
const DynamicDashboard = () => {
   
const userName = "Michael"
const introString = <h3>You have entered into uncharted waters, {userName}. <br/></h3>
const premiumUser = userName.startsWith("M") ? <h3> {introString}{userName}, you have paid a HEFTY sum to be here. We appreciate you sailing the pristinely PREMIUM waters.</h3> :
<h3>{introString}{userName} You seek knowledge you can't afford, we will do our best to get you there....But you should pay for PREMIUM</h3>;
    
const tasks = [
        {
        severity: "Intense",     
        taskName: "Scrubbing the Poop Deck!",
         completed: false},
         {
            severity: "Intimate",
            taskName: "Sanding the captain's peg-leg to suspicious smoothness.",
            completed: true},
         {
            severity: "Jolly",
            taskName: "Singing a pirate song",
            completed: true}
    ]
const tasksList = tasks.map(task => <li className={task.completed.toString()} key={task.severity}>{task.completed ? `✅ ✅ ✅` + task.taskName + `✅ ✅ ✅` :`❌❌❌` + task.taskName + `❌❌❌`}</li>)
const taskElement = <ul>{tasksList}</ul>;
const dateData = new Date().toLocaleDateString();
const dateElement = <h2>{dateData}</h2>;
const taskTracker = tasks.filter(task => task.completed === true);
const taskCounter = <h3>{taskTracker.length} tasks completed!</h3>


    return (
    
       <div> 
    {dateElement}
    {premiumUser}
        
    {taskElement}
    {taskCounter}
        </div>
    )    
}

export default DynamicDashboard;