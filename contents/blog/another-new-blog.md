---
title: Kotlin Keywords and Special Symbols and their usage (Part 1)
description: >-
  I have been working with Java for a while now to build android applications. 
  Just recently I decided to checkout Kotlin. 
date: 2019-08-04T23:00:00.000Z
update: 2019-08-04T23:00:00.000Z
---
I have been working with Java for a while now to build android applications. 

Just recently I decided to checkout Kotlin. Kotlin code looks very much like JavaScript especially with the var, val and const you would see in the code, except for the fact that Kotlin is still a typed language like Java. Though you still have the option of declaring a variable without indicating the type. 

And so far, it has been really nice working with kotlin. It really helps simplify coding as compared to Java. It reduces the number of repetitions involve in Java.

So lets get into it. What’s this thing called Kotlin?

**What’s Kotlin?**

Kotlin is a statistically typed and combines both object-oriented and functional programming features. It originated from JetBrains the company behind Intellij.

Kotlin can be used to write all sort of applications and those applications can run wherever we have a JVM (so basically everywhere) and even in the browser. It reuse Java and JavaScript libraries. 

**Why choose Kotlin over Java**

•	Kotlin helps to simply coding and reduces the boilerplate involve in Java

**Java**

`GloryClass glory = new GloryClass()`

Can be simplified in Kotlin as

`Val glory = Glory()` 

•Kotlin has all the features and advantages of functional programming language. It support higher-order functions anonymous functions, lambdas, inline functions, closures, tail recursion, and generics

•Semi colons are optional

•Null is a separate type --- String (non-null String ) and String?(nullable String	). These are two distinct types in Kotlin. Kotlin help save you from the regular null-pointer exception in Java

•Kotlin runs on many platforms. It translates to JVM byte code, as well as JavaScript. Native implementations are also in the works.

**Object** : In Kotlin an object is used in place of the word static as used in Java to refer to a static method. If  you want the class to be static, you can declare the class in the usual way but use the key word object instead of class.

```
Object MyHouse{
 fun buildHouse() {
//Your code here

}
```

`val house = MyHouse.buildHouse()`

There will be only one instance of this class.

**const:** This is used  to declare  a constant variable. This is same as saying public static final in Java

`const val MY_WEBSITE = "agatevure.com"`

**Companion Object:** To declare a static method in a class in Kotlin you use companion object. A companion object is a singleton instance of the class it resides in. Members of the companion object can be called by using simply the class name as the qualifier:

```
Class Example{
Companion object MyExample{
   fun myStactic(){
   }
 }
}
```

`val instance = Example.myStatic()`

The name of the companion object can be omitted, in which case the name Companion will be used:

```
class Example {
    companion object { }
}
```

`val x = MyClass.Companion`

**Open:** The open keyword is used to make a class extendable by another class. It allows subclassing a class or overriding a method.

`class Glory{}`

`class Agatevure{}`

Agatevure class will not be extandable if open is not added to the class. Like so

`Open Agatevure {}`

So, Glory can now extend Agatevure

`Glory: Agatevure() {}` as opposed to 

`Glory extends Agatevure` in Java

**data:** data classes are used to replace the getters and setters method in Java. It Instructs the compiler to generate canonical members for a class.

`data class Exam (val subject: String, val score: Int)`

Instead of this in Java:

```
Public class Exam{

Private String subject;

Private Int score

Public Exam(String subject, Int score){

this.subject = subject

this.score = score

}

Public String getSubject(){
  return subject
}

Public void setSubject(String subject){
    this.subject = subject
 }

Public Int getScore(){
   return score
}

Public void setScore(){
    this.score = score
}

}
```

**as**  is are used as a typecast 	

```
fun play(x: Any) {
  if (x is String) {
     print(x.length) // x is automatically cast to String
    }
}
```

**val** is used to declare a read only non-mutable variable. Non-mutable means variables that cannot be changed. It’s same as declaring a variable in Java as final.

`val name: String = "Glory"`

**var**  is used to declare a mutable variable

`var myVariable: Int = 5`

**by** delegates the implementation of an interface to another object

```
example
class X : Y by Z, K
```

This code is saying: I am class X and I offer functions of interface Y which are provided by Z. I'll implement K by myself (that's implicit, so no by there)

**Any** all classes in Kotlin has a common superclass Any, that is a default super for a class with no supertypes declared.

`Class Example{}` // Explicitely inherit from Any

**Unit** in Java if we want that a function does return nothing we use void, Unit is the equivalent in Kotlin. But unlike void, Unit is a real class (Singleton) with only one instance.

```
fun doSomething(){
 log.d(“Hello world”)
}
```

//The above function returns a unit as any other function that doesn’t explicitly declare a return type. Making the type explicit or implicit does not really matter the function below is exactly the same as the above function

```
fun doSomething : Unit(){
  log.d(“Hello world”)
}
```

**Nothing** is the ultimate subtype of all nullable types, which lets the value null be used as a value of any nullable type.

**constructor** declares a constructor. There are two types of constructors in kotlin. Primary and secondary construcors.

```
class MyClass constructor () { 
//This is a primary constructor. Declared at the header of the class// 
}
```

```
class MyClass { 
  init{println(“primary constructor”)}
  constructor(i : Int){println(“Secondary constructor”)}
 }
```

To declare an empty primary constructor with non-default visibility:

`class DontCreateMe private constructor () { /your code here/ }`

**init** begins an initializer block

**downTo** to iterate numbers in reverse order

`for (i in 4 downTo 1) print(i)` 
// This print 4321

The post is getting long so we will end it here and click here to read the rest of the post. If you have any question, you can reach out to me on twitter.
