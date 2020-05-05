## Find And

Keyword Searching In Forms Using Javascript

## The How
```
## HTML
```
To begin this exercise, I’ve created a basic form in HTML for a user to fill out. Our function will be running once the user hits submit and will display to the user number of times that keyword is found. In my example I will be using the key word “and”.

```
## Javascript
```

Now that we have the structure of the form, we can move into the Javascript. The first thing I did was create a function named countAnd. This function will be receiving information from the user using a variable. I called this variable ‘andNumber’.

Using document.getElementById we pass along the input from the user.

Next, we want to take that input and create another variable to see if we have any matches. We do this by passing along to the variable our previous variable that attained the input from the user. Then we will use the .match with our regex parameters.

```
## Filling in the If Statement 
```

First, you will want to pass along the number of matching instances the regex returned.
Next, we be displaying the number by using innerHTML and displaying the result in div item below the form. Using be using a template literal to display the amount in the sentence.
Within the curly brackets I’ve added the matchingInstances.length will return how many elements are within the array.
If, there are no 'and(s)' found, then the statement returns nothing.

## Authors

* **Elliana Madsen** 
