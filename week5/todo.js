// from chapter 15 array for todos
const tasks = [
    { name: 'Get Milk' },
    { name: 'Go for a run' },
    { name: 'Finish writing last chapter' },
    { name: 'Phone bank' },
    { name: 'Email Craig' }
    ]
// using template languages 
{/* <ul>
{{#tasks}}
<li>{{name}}</li>
{{/task}}
</ul> */}
//  and this 
{/* <ul>
    <% tasks.forEach(function(task) { %>
    <li><%= task.name %></li>
    <% }); %>
    </ul>
<% } %>> */}
// would yeild this
{/* <ul>
    <li>Get Milk</li>
    <li>Go for a run</li>
    <li>Finish writing last chapter</li>
    <li>Phone bank</li>
    <li>Email Craig</li>
</ul> */}
// using these language templates
// Handlebars
// Pug
// EJS
// Mustache
// Nunjucks