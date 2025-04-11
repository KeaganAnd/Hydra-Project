## Variables

#### What are variables?
Simply, variables are used to store data! It can be any number of things like numbers or text.

<span><br></span>

Over time you will use a *lot* of different data types. This section will talk about the most simple ones.

#### How to declare a variable

Variables can usually be declared in this format
```lua
local variable_name = 10
```

**local**: This will be explained more later on but its a good idea to include this before your variables. It specifies the scope the variable can be accessed in

<span><br></span>

**variable_name**: This can be whatever you'd like to name your variable. Make it as descriptive as possible so you're not confused as projects get larger. There are many ways a name can be formatted. Some popular options are *camel case* and *snake case*. Camel case leaves the first work lowercase and the following words, each first letter is capatalized. Which looks like this
```lua
local camelCaseVariable =  10
```
Snake case leaves all letters lowercase, separating the words with underscores.
```lua
local snake_case_variable = 10
```
You do not *need* to do it either of these ways. They're simply a method to keep your code clean. There are several different versions of these as well. Choose whatever you like best!

<span><br></span>

**=**: This equal sign means that you are assigning the value to the right of this symbol to the variable name on the left.

<span><br></span>

**10**: This is the value being stored to the variable name. This can be any number of types which are explained more below.

### Variable Types

##### Integers
Integers are any whole number, so no decimals, positive or negative

They can look like this
```lua
-- This is an integer
local w = 5
```

##### Floats
Floats are any non whole numbers, these *can* include decimals, positive or negative

They can look like this
```lua
-- This is a float
local x = 1.5
```

##### Strings
Strings are any combination of characters, so you can store words this way. They can include numbers. **However** you can not perform arithmetic(math) on them.

They can look like this
```lua
-- This is a string
local y = "Hello!"
```

##### Booleans
Booleans are the hearts of your computing system. It either holds an *on* state, which can be represented  as a '1' or as 'True' in computing. And also an *off* state, which can be represented as a '0' or as 'False'

```lua
-- This is a boolean
local z = false
local z2 = true
```


<span class="bottomNavBar"><a href="?section=intro">Section 0: Intro</a> <span class="separator">|</span> <a href="?section=test">Section 2: UNKNWON</a>  </span>