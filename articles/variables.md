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

**local**: You only need to include this if your creating the variable for the first time. This will be explained more later on but its a good idea to include this before your variables. It specifies the scope the variable can be accessed in.

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

<span><br></span>

You can also combine strings better known as <span class="first-word">concatenation</span>.

```lua
local greeting = "Hello " .. "Friend"
```

This then stores the string "Hello Friend" in your 'greeting' variable. You can also combine strings with the values in your variables which you'll see in the examples below.

##### Booleans
Booleans are the hearts of your computing system. It either holds an *on* state, which can be represented  as a '1' or as 'True' in computing. And also an *off* state, which can be represented as a '0' or as 'False'

```lua
-- This is a boolean
local z = false
local z2 = true
```

##### Nil
'nil' just means none. So if nil is assigned to a variable it simply means there is no value attached. But be careful because nil is a value itself, it is not a string.

```lua
local nothing = nil --This is a nil value

local notNil = "nil" --This is not a nil value, this is a string.
```

### Manipulating Variables
Now you may be thinking great, now what can I do with these? Don't get bored yet, you're never rid of these guys. You can access and change variables.

<span><br></span>

Let's say, I wanted to keep track of how many apples I have left for my horses. I'll start with 10 apples. I can store that like this

```lua
local apples = 10

print("apples = " .. apples)
```

<span><br></span>

Now if you remember the explanation above you know this means that '10' is being assigned to 'apples'.

<span><br></span>

Now if lets say I fed my horses and used 3 apples. How can I change that 10 to 7?
Well you could simply assign 7 to our variable
```lua
local apples = 10

print("apples here = " .. apples)

apples = 7

print("apples there = " .. apples)
```

<span><br></span>

Notice how I did not include 'local' on that second statement because I already created the variable above it.

<span><br></span>

If you ran this code on your computer, *which I encourage you to*, you may have noticed that it first printed **10** and then **7**. This is because the computer reads our code top to bottom, and then left to right. We must do the same. Granted we already do. But you need to remember that when you're thinking how a computer thinks. They are a lot more literal than us.

<span><br></span>

Now you have 7 in your 'apples' variable. But there's a problem. What if I had a super larger number? Do I really want to have to manually calculate each time I need to subtract? Of course not, thats why we invented computers. Instead we can do this!

```lua
local apples = 10

apples = apples - 3

print("apples = " .. apples)
```

Now if we use our knowledge so far we can interpret that statment like this

<span><br></span>
 
We know apples are equal to 10 currently. 
So lets turn our code into some numbers.

<span><br></span>

**apples = 10 - 3**

<span><br></span>

This is giving apples a new value! Of the old value minus 3. Which leaves us with 7!

##### Dynamic Languge

Lua, the language you are learning is dynamically typed. Which simply means the computer determines the type of variable when the script is ran. Some languages require you to specify the variable type while you create the variable. For example to declare a variable in another popular language called C++ it looks like this

```java
int number = 5;
```

'int' meaning integer. Since you *don't* need to do that you can assign whatever you want to variables whenever.

```lua
local variable = 5

print("Variable is currently: " .. variable)

variable = "Not a number?"

print("Variable is currently: " .. variable)

```

What? Somehow our integer variable became a string variable. Cool huh? Not really, lets continue.

##### Static Variables

Some variables you may never want to change the value, this is called a static variable. Using these saves a bit of <a href="https://en.wikipedia.org/wiki/Computer_memory" target="_blank">memory</a> on your computer. We won't get much into the parts of a computer(hardware), simply memory is a place where your computer stores data. Like these variables we're making. However this memory is limited and gets deleted when the computer loses power, so a good programmer will aim to use as little as possible.

<span><br></span>

To make a static variable you just need to make your variable name all capitalized. Let's use pi to show you.

```lua
local PI_VALUE = 3.14159
```
### Excercises

**Excercises are designed to review all the stuff you learned in this section! I recomend trying them all.**

#### Excercise 1 | Jimmy The Giraffe

Great! You made it to the end. Now let's test some of the stuff you learned.

<span><br></span>

I have a pet giraffe named **Jimmy**. He's **13** years old and weighs **1305.56** pounds. He's **healthy**, and he **doesn’t** have a brother — there’s no brother to speak of, so nothing should go there.

Use the correct variable type for each value. You should store his name, age, weight, whether hes healthy or not, and his brother.

<span><br></span>

<span>
<div class="accordion-container">
<img class="accordion-down-arrow" src="imgs/arrow-down.png">
<button class="accordion">Exercise 1 Answer</button>
</div>

<div class="panel">
    Keep in mind variable names and order do not be the same as well as not needing any of the comments. However the value does.

```lua
local name = "Jimmy"    -- His name is stored as a string
local age = 13          -- His age is stored as an integer
local weight = 1305.56  -- His weight is stored as a float
local healthy = true    -- His health is stored as a boolean
local brother = nil     -- Since his brother doesn't exist we can store it as nil
```
</div>

</span>

<span><br></span>

#### Excercise 2 | Grocery Store

You're gonna be tracking grocery store transactions!

Make a variable called "store balance", remember how to format variables! You need to track the store current dollar balance.

<span><br></span>

1. The store starts the day with a balance of **$100**
2. Someone makes a purchase of **$34.12**
3. Another person makes a purchase **$13.01**
4. The final person makes a purchase of **$130.32**
5. The store buys some more apples and spends **$35.45**

<span><br></span>

<span>
<div class="accordion-container">
<img class="accordion-down-arrow" src="imgs/arrow-down.png">
<button class="accordion">Exercise 2 Answer</button>
</div>

<div class="panel">
    Keep in mind variable names and order do not be the same as well as not needing any of the comments. However the values do.

```lua
local storeBalance = 100             -- We create the variable with the starting balance of $100

storeBalance = storeBalance + 34.12  -- Since the store sells $34.12 of product we add it to their balance

storeBalance = storeBalance + 13.01  -- Since the store sells $13.01 of product we add it to their balance 

storeBalance = storeBalance + 130.32 -- Since the store sells $130.32 of product we add it to their balance 

storeBalance = storeBalance - 35.45  -- Since the store bought $35.45 of product we subtract it from their balance

print("Balance: " .. storeBalance)

```

When you run the script it should print:
**Balance: 242.0**
</div>

</span>
