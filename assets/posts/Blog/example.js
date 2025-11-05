console.log('Hi, the example is working.')
{
  let div = document.getElementById('embeddedDiv'),
    h2 = document.createElement('h2');
  h2.textContent = 'Inserted Block'
  div.appendChild(h2)

  let p, line, preDefinedWords = `
Hi,
I am a running script code.
<div id="embeddedDiv"> <script defer="defer" src="{{ site.baseurl }}/assets/posts/Blog/example.js" /> </div>
The block title is <h2> but it does not on the ToC since it is added AFTER the page is loaded.

My style is in _custom_air.scss.

My function is say something every 1000 ms.

So far, so good...
`.trim().split('\n')

  function saySomething() {
    p = document.createElement('p');
    line = preDefinedWords.shift();
    console.log(line)
    if (line.length === 0) {
      p = document.createElement('br')
    } else {
      p.textContent = '[' + new Date().toLocaleString() + '] cc: ' + line
    }
    div.appendChild(p)
    if (preDefinedWords.length > 0) setTimeout(saySomething, 1000);
  }
  saySomething();

}