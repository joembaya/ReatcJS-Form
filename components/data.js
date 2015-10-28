var Counter = React.createClass({
        
        render: function () {
          return ( 
           <div> <a href="/" >HOME</a> | <a href="signup" > Signup </a> | <a href="http://www.athome.lu"> AtHomelu </a> </div>
          );
        }
      });
      ReactDOM.render(
        <Counter />,
        document.getElementById('menuhead')
      );
      
      var Counters = React.createClass({
        
        render: function () {
          return ( 
           <h1>Welcome</h1>
          );
        }
      });
      ReactDOM.render(
        <Counters />,
        document.getElementById('welcomeid')
      );
      


