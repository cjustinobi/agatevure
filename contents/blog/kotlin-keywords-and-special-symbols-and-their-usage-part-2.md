---
title: Kotlin Keywords and Special Symbols and their usage (Part 2)
description: >-
  In part 1 of the post I did a little introduction to Kotlin and what it has to
  offer. 
date: 2019-09-06T08:28:54.897Z
update: 2019-09-06T08:28:54.918Z
---
In part 1 of the post I did a little introduction to Kotlin and what it has to offer. What makes it smarter than Java and some of the keywords that you might find confusing if you are new to Kotlin. If you have not read that post I would advise you click on here to check it out. Nevertheless, if you are not completely new to Kotlin, you can continue reading. This post is not totally dependent on the part one of the series. 

**Some keywords in Kotlin**

when is the replacement of switch statement from other languages like C, C++, and Java. It is concise and more powerful than switch statements.

Here is how a when expression looks like -

```
var monthOfYear = 3

when(monthOfYear){

	1 ->  println(“January”)

	2 ->  println(“Febraury”)

	3 ->  println(“March”)

	4 ->  println(“May”)

	else -> println(“Other month”)

}

// Displays – “March”
```

**Suspend** A suspending function is simply a function that can be paused and resumed at a later time. They can execute a long running operation and wait for it to complete without blocking. However, suspending functions can only be invoked by another suspending function or within a coroutine. It can take a parameter and has a return type.

```
suspend fun backgroundTask(param:Int) : Int{ 
// long running task
}
```
**invoke** when you specify an invoke operator on a class it can be called on any instances of the class without a method name. It seems especially useful for  classes that really only have one method to be used.


```
class Welcome(val message: String) {	
  operator fun invoke(name: String) {
     println("$message $name")
    }
}
```

```
fun main(args: Array<String>) {

     val welcome = Welcome(greeting = "Welcome")
     welcome(name = "Glory")

//this calls the invoke function which takes String as a parameter

}
```

**also**  passes an object as a parameter and returns the same object (not the result of the lambda!



**data** class House(var color: String, var doors: Int)

```
val house = House("red", 2)

val output = house.also { it.doors = 3 }

println(house) //  house(color=red, doors= 3)

println(output) // house(color=red, doors= 3)
```

**let**  accepts objects as parameters and returns the result of the lambda. It is useful for conversion.

```
data class House(var color: String, var doors: Int)

val house = House("red", 2)

val output = house.let { it.doors = 3 }

println(house) //  house(color=red, doors= 2)

println(output) // 3
```

**apply**  is a function literal with receiver: The object is not passed as a parameter, but rather as this. An object passed in such way is called the receiver.

```
val house = House("red", 2)

val output = house.apply { doors = 3 }

println(house) //  house(color=red, doors= 2)

println(output) // 3
```

**run** is a literal with receiver. The return value is the Lambda result.

```
fun practice() {
var learn = "I am practicing"
run {
val learn = "What are you practicing"
println(learn) // What are you practicing
}
println(learn) // I am practicing
}
```

**with** It’s used to perform some operations on an object and returns some other object. It should be used to call multiple methods on an object.

```
data class Practice(var course: String, var duration : Int)
var learn  = Practice(“kotlin”, “2”)
with(learn){
	course = “ Learning Kotlin”
	duration = 5
}
// Practice(course = Learning Kotlin, duration = 5)
```

**Lazy** is a function that takes a lambda and returns an instance of lazy which can serve as a delegate for implementing a lazy property: the first call to get() executes the lambda passed to lazy() and remembers the result, subsequent calls to get() simply return the remembered result.

```
val name : String by lazy {
   println("glory")
   "another name"
}
```

```
fun main(){
   println(name)
   println(name)
}
```

**lateinit** Properties that have a non-null type must be initialized in the constructor. But to avoid null checks when referencing the property inside the body of a class. You can mark the property with the lateinit modifier.

```
class House private constructor(){
    private lateinit var myRepo : MyRepo
    init {
         myRepo = getMyRepo()
    }
```

```
    private fun getMyRepo(): MyRepo {
      //Your code here
    }
}
```
**When to use lazy and lateinit**

**lazy** can only be used for val properties, whereas **lateinit** can only be applied to vars because it can’t be compiled to a final field, thus no immutability can be guaranteed.


**Special Symbols in Kotlin**

**:** this is used to extend a class in kotlin

```
Class Motor: Car {}
```
**::** It creates a member reference or a class reference

```
val c = MyClass::class
```

**..** creates a range

```
for (i in 1..4) print(i) // This will print 1234
```

**?**  This marks a type as nullable

```
var a: String = "abc"
a = null // compilation error
```

To allow null we can declare a variable as nullable String written as String?

```
var a: String? = "abc"

a = null // ok
```

**?.** performs a safe call, calls a method or accesses a property if the receiver is non-null

```
val a = "Kotlin"
val b: String? = null

println(b?.length) // print null
println(a?.length) // Unnecessary safe call of a not null variable . This prints 6
```

**?:**  takes the right-hand value if the left-hand value is null


**!!**  Assert that an expression is non-null and throws an exception if the value is null

```
val l = b!!.length 
```

**->**      Separates the parameters and body of a lambda expression

	Lambda expression syntax

```
val sum: (Int, Int) -> Int = { x: Int, y: Int -> x + y }
```
	This can also be represented as

        ```
	{x, y -> x+y}
        ```

    Separates the parameters and return type declaration in a  function type

	val a = { i: Int -> i + 1 } // The inferred type is (Int) -> Int

  Separates the condition and body and body of a when expression


**;** used to separate expressions on the same line

**:** separates a name from a type in declarations

```
fun glo (name : String)
```

**$** References a variable or expression in a String


**it** is used inside a lambda to refer to its parameter implicitly


In conclusion, some of these keywords and symbols are broad on their own and might require a more detailed writeup on it. In case you still find any of the keywords and symbols confusing and would like a more detailed explanation. You can also reach out to me via my social handles. Thanks for taking the time to read this post. I hope you learnt something. As always don’t forget to like the post. And start coding in Kotlin..



