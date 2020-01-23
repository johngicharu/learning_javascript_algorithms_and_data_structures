/*
  Algorithm - A process or a set of steps to accomplish a certain task.
  It forms the foundation of everything in programming as everything in programming involves some sort of algorithms. Understanding it helps form a firm foundation for being a successful developer.
  How does one improve in solving problems
    1. Devise a plan for solving problems.
    2. Master common problem solving patterns.
*/
/*
  Problem Solving Approach
    1. Understand the problem
    2. Explore concrete examples
    3. Break it down
    4. Solve/simplify
    5. Look back and refactor
*/

/* ----------------- UNDERSTANDING THE PROBLEM -----------------
  It can be tempting to just dive in and start working on it, especially when there are time constraints or there is an interviewer infront of you. However, taking a step back to understand the problem always leads to better results. There are a number of steps you can take here:
    1. Can I restate the problem in my own words.
    2. What are the inputs that go into the problem.
    3. What are the outputs that come from the solution to the problem.
    4. Can the outputs be determined from the inputs? In other words, do Ihave enough information to solve the problem. (Note: You may not be able to answer this question right off the bat or untill you set about solving the problem. However, considering this at an early stage is useful).
    5. How should I label the important pieces of data that are a part of the problem.

    Example: Write a function which takes two numbers and returns their sum.:
      1. "Implement addition"
      2. "what are the types of numbers that will be given? what is the upper bound? what happens if an input is left out? can more values be given, int? string?, float?"
      3. "int? float? string?"
      4."Should I return a string, float or int?"
      5. 
*/
/*------------------ EXPLORING CONCRETE EXAMPLES ----------------
  The next thing to help us better understand the problem better and provide sanity checks. It also helps you check your work and confirm whether or not they work or not. Here, user stories or unit tests are also handy.
    1. Start with simple examples -> 2 or 3 simple ones (Easiest use cases)
    2. Progress to more complex examples
    3. Explore examples with empty inputs
    4. Explore examples with invalid inputs
    Example: Write a function which takes in a string and returns counts of each character in the string.
    charCount("aaaa"); => {a: 4} => do we return all letters with their counts preset to 0?
    charCount("hello"); => {h: 1, e: 1, l: 2, o: 1}
    How do we handle situations such as "Hello my number is 273189237123" or
    "Hello hi" => do we consider upper case items
    If no string is passed or an empty one is, do we return an empty object or...?
*/
/*------------------ BREAK IT DOWN -------------------
  Explicitly write out the steps you need to take. Forces you to think about your code before you write it.
  Also helps you identify some issues in the problem, or the ones that require more work.
*/
/*----------------- SOLVE THE PROBLEM -----------------
  Solve the problem. If you can't, solve a simpler problem.
    1. find the core difficulty in what you're trying to do.
    2. Temporarily ignore that difficulty.
    3. Write a simplified solution.
    4. Incorporate that difficulty back in.
*/
/*----------------- LOOK BACK AND REFACTOR ------------------
  1. Can you check the result?
  2. Can you derive the result differently?
  3. Can you understand it at a glance?
  4. Can you use the result/method for some other problem?
  5. Can you improve the performance of the problem?
  6. Can you think of other ways to refactor?
  7. How have other people solved this problem?
*/
