
## SalesLoft: Build a simple web app 
This app will use the SL API to display a list of people. The goal is to always have a finished product ready to be improved upon with new features.

This web application uses the SalesLoft API to build two distinct features.

- It shows a list of People from records made available from the SalesLoft API and a supplied API key. The list displays each persons name, email address, and job title. 

- A button was created that, when clicked, displays a frequency count of all the unique characters in the email addresses from list of persons. The list is sorted by frequency count. 

Live application can be found [here](https://salesloftsimple-web-app.web.app/)

## Frameworks
 Front end - React
 
 Styling - Bootstrap and custom CSS
 
 Hosting - Firebase 
 
## The process and challenges
This simple app certainly presented a number of challenges! Through research, perseverance, and a ton of coffee, I was able complete this challenge but definitely see room for improvement. 

The first challenge thinking about the design and architecture of the simple app. What components did I want to build and where would I keep the logic? I tried to keep the components as simple as possible and focused on best practices and good code structure. For me this meant keeping the API fetch and state and the App level and passing down props into my components. 

The next hurdle was getting past the CORS issue which presented its ugly head very early on in the console. After some research I settled into the solution of sending my API request through a CORS proxy server. 

Next came addressing the async issues. I could easily console the data I was receiving (after render) but React didn't like when I attemped to map over things. Thanks ternary operators for always saving the day and making me feel cool. 

After getting the data I wanted on the page, the next thought was how I wanted it presented. In cards or a list maybe? I went with presenting the data in a bootstrap table and fiddled with a bit of custom css as well. 

Next I set up the button to toggle state change and again used my friend the ternary to display the next table. Then came time to work on the frequency. This took the most time for me and I had to really break the task down into smaller bits in order to get the desired outcome. Needless to say lots of coffee was consumed and a little chair dance was had once I got those key / value pairs going!  

I finished up with using CSS to tighten the styling (while keeping it simple), cleaning up my code base, and tackling any remaining warnings I found in the console. Overall lots of learning and fun designing and creating this simple app. 

## Additions and future learning
- Tests (other than the good ol included 'renders without crashing') 
- Separate functions into a services file in an effort to keep components as simple as possible

## Acknowledgements 
I'm appreciative of the HR and Engineering teams at SalesLoft for allowing me the opportunity to showcase some of my knowledge acquired at Flatiron School. Additionally, big big thanks to my Wife for her support and encouragement. 
