values I need: 
    tasks = [
        {}
    ] (state)
    completedTasks = int (derived)
    totalTasks = int (derived)
    addTaskText = string (state)

    user = {
        name, (string)
        awayTimezone, (dropdownList)
        city, (for weather API)
    }


* when tasks updates, as recomputation is perfomed, new value of completed & total is calculated
* hook to improve performance (useMemo, ...)
* i need to integrate with spotify API
* Ensure best practice, a11y, performance


React router
    settings page

### Timeline
#### Generating Static version of My Space
This involved translating previous HTML code to JSX components. In this section, i broke down the UI into components. Refactor Static version of App
- Use dummy values gotten from data.js


#### Adding Interactving & State
In this section, I decided which values should be state and not. Figured out the most efficient place (component) to store state values. This app used 2 state values
* Tasks [{}]
* Users {}

Every other value was derived from state.



V2 (stage 2) - interacting with DB API
models
    tasks
    users



Nice to have additional functionality
* export list & pin it on phone


Optimisation
- useMemo
- ...