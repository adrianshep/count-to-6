console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(...comments) {
    // what goes here?
        comments.forEach(function (value) {
          var replacedA = value.replace(/'/, "&apos");
          var replacedQ = value.replace(/""/, "&quot");
          var replacedL = value.replace(/</, "&lt");
          var replacedG = value.replace(/>/, "&gt");
          var replacedM = value.replace(/&/, "&amp");
        });

        return result;
    }
    var replacedS = originalS.replace(/a/g, "b")
    // don't forget to return the escaped string!
}


/*

' | &apos;
" | &quot;
< | &lt;
> | &gt;
& | &amp;

TAGGED TEMPLATE STRINGS
 Exercise 10 of 10

In addition to the features you already learned about, template strings can be
tagged. This is done by placing a function name, like fn, before the template
string. For example:

    fn`Hello ${you}! You're looking ${adjective} today!`

The semantics of a tagged template string are very different from those of a
normal one. In essence, they are a special type of function call: the above
"desugars" into:

    fn(["Hello ", "! You're looking ", " today!"], you, adjective);

Note how the (n + 1)th argument corresponds to the substitution that takes place
between the nth and (n + 1)th entries in the string array. Thus, there is always
one more entry in the string array than there are substitutions; in the above,
the counts are 3 vs. 2.

This can be useful for all sorts of things, but one of the most straightforward
is automatic escaping of any interpolated variables. For example, you could
write an HTML-escaping function, and name it html, such that:

    html`<p title="${title}">Hello ${you}!</p>`

…returns a string with the appropriate variables substituted in, but with all
HTML-unsafe characters replaced.

## Challenge

In fact, let's do that right now. You will be given two arguments to your
program: a username, and a comment. Both will potentially contain HTML-unsafe
characters (namely ', ", <, >, and &). Your job is to use tagged template
strings to log a safely-escaped HTML rendering of the comment.

For example, if the username is "domenic" and the comment is "<dl> is a fun tag",
you should output:

    <b>domenic says</b>: "&lt;dl&gt; is a fun tag"

As before, you could start doing this using simple ES5 constructs. But the goal
is for you to write a function that you can use as a tag in a tagged template
string, that will do any escaping automatically.

## Hints

If you don't remember the corresponding escape sequences, they are:

    ' | &apos;
    " | &quot;
    < | &lt;
    > | &gt;
    & | &amp;

Remember that the best way to do string replacement in JavaScript is with
regular expressions, e.g.

    var replacedS = originalS.replace(/a/g, "b");

+++++++++++++++++++++++++++++++++++++++++++++

    String.prototype.replace():

    str.replace(regexp|substr, newSubstr|function)

    function replacer(match, p1, p2, p3, offset, string) {
      // p1 is nondigits, p2 digits, and p3 non-alphanumerics
      return [p1, p2, p3].join(' - ');
    }
    var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
    console.log(newString);  // abc - 12345 - #$*%

+++++++++++++++++++++++++++++++++++++++++++++

The outline of your program should look something like this:

    console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

    function html(* what goes here? *) {
        // what goes here?
        // don't forget to return the escaped string!
    }

If you're not sure where to start, maybe try console.loging the arguments to
your html function.

Finally, feel free to use rest parameters if you think that would make things
easier!

Rest parameters are used when you want to write a function that accepts a
variadic number of arguments, but acts on them as if they were an array.
For example:

   function sum(...args) {
       var result = 0;
       args.forEach(function (value) {
           result += value;
       });

       return result;
   }

   sum(1, 2, 3); // 6

Note that in the above example, args is a real array, with a forEach method and
everything. Just like the spread operator helps us get rid of .apply, rest
parameters help us get rid of Array.prototype.slice.call(arguments).

*/
