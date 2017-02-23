![UML](http://i.imgur.com/RJaFiVo.png)

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/7dd9dc2ad42cf8e199c7)

1. How have you implemented the idea of HATEOAS in your API? Motivate your choices and how it support the idea of HATEOAS!

Answer: I have made a "href" field for every resource in the API.

2. If your solution should implement multiple representations of the resources. How would you do it?

Maybe make one big collection instead of three, a collection that contains everything.

3. Motivate and defend your authentication solution? Why did you choose the one you did? Pros/Cons.

I wanted a simple authentication and let a third party handle user data and registration of users. 
This because securing user data and handling authentication is a difficult process which takes a lot of time and effort.

4. Explain how your web hook works.

My web hook is a slack web hook where you can supply a incoming slack Webhook URL with the "path" variable in json.
You send the Webhook URL as a post request to the route ../webhooks/add.
Then you can send messages to the general chat of that slack Webhook URL through sending get request
to ../webhooks/send/(message).

5. Since this is your first own web API there are probably things you would solve in an other way looking back at this assignment. Write your thoughts down.

6. Did you do something extra besides the fundamental requirements? Explain them.
