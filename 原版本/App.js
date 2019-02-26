import React, { Component } from 'react';
import './App.css';
import Gist from 'react-gist'

function Ul(props){
  const lis=props.li;
  const list=lis.map((number)=>(
    <li key={number.id}><a href={number.hash}>{number.text}</a></li>
  ))

  return(
    <ul className={props.toggle?'close':'open'} onClick={props.click}>
      {list}
    </ul>
  )
}

function Nav(props){
  
  const titles=props.title;
  const nav=titles.map((number)=>(
  <li className='link' key={number.id}>
  <a className={number.floor} href={'#'+number.hash} onClick={props.click}>{number.name}</a>
  {number.ul}
  {/* <Ul li={[{id:0,text:'什麼事JSX??'},{id:0,text:'那ES6的標準又跟ES5差在哪呢？'}]}/> */}
  </li>)
)

  return (
  <ul className='font_size'>
    {nav}
  </ul>
  )
}

function Re(props){

  return <span className='react_color'> React </span>
}

function Jsx(props){
  return <span className='blue_color'> JSX </span>
}

function Red(props){
  return <span className='red'> {props.text} </span>
}

function Secsion(props){
  if(props.view){
    return <OneFloor click={props.click} />
  }
  else{
    return <TwoFloor click={props.click} />
  }
}

function OneFloor(props){
  return (
    <article>
    <p className='font_size'>
      有使用過<Re />NPM 套件的應該對上面的區塊很熟悉吧 ！<br/>
      這是使用官方的 NPM 套件時，官方給的樣版，<br/>
      如果是剛學<Re />的人一定會被<Re />程式碼複雜度給嚇到吧 ！<br/>
      建議剛開始學<Re />的人使用官方的 NPM 套件，<br/>
      因為它使用多樣化得寫法來撰寫程式，<br/>
      例如使用<Jsx />,<span className='blue_color'> ES6標準</span>，<br/>
      使用 NPM 套件的話，程式撰寫規則有寫錯的話<span className='node_color'> Node.js </span>會在終端機輸入介面告知有問題的地方，<br/>
      也會直接在瀏覽器顯示相同的資訊，
      不過有的時候會發生程式撰寫上沒有問題，
      但在瀏覽器卻出現問題的狀況，這種情況通常是，<br/>
       <Re />程式撰寫上規則是對的，但瀏覽器會判端出邏輯有矛盾的地方，<br/>
      這邊隨便放個例子，大概是長這個樣子<br/>
      </p>
      <div className='img_box'>
      <img className='zoom_out' src='warnig_01.png' alt='vsc_terminal' onClick={props.click}/>
      <img className='zoom_out' src='warnig_02.png' alt='explorer' onClick={props.click}/><br/>
      </div>
      <br/>
      <hr/>
      <h2 id='what_jsx'>什麼是 JSX ？？</h2><br/>
      <p className='font_size'>
      <Jsx />跟 XML 很像，自己創造Html標籤(Tag)，<br/>
      範例：<br/>
      </p>
      <Gist id='AmberNeko/ce32511e8564a071a8cbcca6c393eac2' file='Li.js'/>
      <p className='font_size'>但其實這個標籤是需要經過 babel 重新轉譯過後才會把裡面的東西呈現出來的，<br/>
      如果有興趣了解轉譯過後的樣子可以到<a href='https://babeljs.io/'> babel ( 傳送門 )</a>的官網去玩玩看，<br/>
      撰寫的方法是<Red  text={'function'}/>
      後面一定要接大寫英文字母開頭，<br/>
      因為那是要區分被 reander 用的標籤，<br/>
      而一般的函式就不用開頭大寫，<br/>
      最後在用 13 行 ReactDOM.render 在 ID 名叫 root 的 Html 標籤裡面就大功告成了。
      </p>
      <hr/>
      <h2 id='es_different'>那 ES6 的標準又跟 ES5 差在哪呢？</h2><br/>
      <p className='font_size'>
      在ES6的標準裡變更最常用的大概就2個部分吧!<br/>
      分別是<span className='tomato_color'>宣告變數</span>跟使用<span className='tomato_color'>箭頭函式</span>吧！<br/>
      在 ES5 的宣告變數是用<Red text={'var'}/> x = y，<br/>
      或著是直接 x = y 就可以 ( 不是真的宣告 )，<br/>
      而 ES6 就變成<Red  text={'let'}/> ( 變數 )，<Red  text={'const'}/>( 常數 )<br/>
      在 ES6 雖然還是可以用<Red  text={'var'}/>來宣告，<br/>
      但實在是不建議繼續使用<Red  text={'var'}/>來宣告了！<br/>
      原因的話下面有例子可以參考來源 (<a href='https://msdn.microsoft.com/zh-tw/library/bzt2dkta(v=vs.94).aspx'> MSDN 傳送門 </a>)：<br/>
      <Gist id='AmberNeko/7c96b155339f58369c5c99d07e1207f5' file='let.js'/><br/>
      <span className='tomato_color'>箭頭函式</span>的話其實只是省略了一些字而已，<br/>
      範例 ：<br/>
      <Gist id='AmberNeko/7c96b155339f58369c5c99d07e1207f5' file='arrow_function.js' />
      
      </p>
      <hr className="hr" /><h3 className="h3">( 持續更新中 )</h3><hr className="hr" />
      </article>
      )
}

function TwoFloor(props){
  return (
    <article>
    <p className='font_size'>
    首先要使用 NPM 開發的話，建議先下載
    <a href='https://nodejs.org/en/' className='node_color'> Node.js ( 傳送門 )</a>，<br/>
    不一定要安裝最新版本，因為最新版通常是處於測試狀態，可能會發生意料之外的情況，,<br/>
    安裝過程不會很複雜這邊就不多做解釋，如果真的遇到問題可以上網找找看相關資訊，<br/>
    或到我的<a href='https://github.com/AmberNeko'> GitHub ( 傳送門 ) </a>留言。
    下載完後打開終端機 ( Windows 叫做命令提示字元 )輸入 npm --version 檢查，<br/>
    Windows 10 打開的方式這邊介紹幾種 ：
    </p>
    <ol className='font_size'>
      <li>點擊在工作列上的 Windows ( 以前的開始 ) 標誌後，直接鍵盤輸入 cmd ( command 的縮寫 )就會出現命令提示字元的選項。</li>
      <li>一樣點擊在工作列上的 Windows ( 以前的開始 ) 標誌後，找尋 Windows 系統的資料夾就會看到了。</li>
      <li>使用快速鍵，鍵盤左下角有一個按鍵是 Windows 的圖案，按住這個按鍵 + x 就會出現功能選單，選擇 Windows PowerShell 。( 用這個也可以 )</li>
    </ol>
    <p className='font_size'>接者會看到以下畫面 ：</p>
    <div className='img_box'>
    <img className='zoom_out' src='npm_version.png' alt='npm_version' onClick={props.click}/>
    </div>
    <h2>安裝 React App</h2>
    <p className='font_size'>
    NPM 安裝有分全域安裝跟區域安裝，新手一開始用區域安裝就好，<br/>
    在命令提示字元輸入：</p>
    <ol className='font_size'>
    <li>cd 專案目錄名稱(絕對路徑 / 相對路徑)</li>
    <li>npm install create-react-app<br/>
      <Red text={'注意 ！！'} />所有的命令輸入都要在該安裝套件的資料夾輸入才有作用，要不然終端機是無法認得這些指令的。</li>
    <li>
      第一次安裝完成後應該會幫你直接開啟瀏覽器，這個狀態是開發測試環境，<br/>
      一開始長的就像本網頁的 header 那樣，下次要再啟動測試環境的話輸入：npm start</li>
    <li>
      開發完成想要正式上線的話要使用打包模式，<br/>
      打包的指令是 npm run build，打包的程式會被放在 build 資料夾，<br/>
      所有的程式就會被壓縮成一行以減少檔案大小然後分門別類放置，<br/>
      上線的話只要把該資料夾的東西全丟上伺服器就好。
      </li>  
    </ol>
    <hr className="hr" /><h3 className="h3">( 持續更新中 )</h3><hr className="hr" />
    </article>
  )
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      view:true,
      istoggle:true,
      display:"none"
    }
    this.arrowDisplay=this.arrowDisplay.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.arrowDisplay);
  };
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.arrowDisplay);
  };
  
  arrowDisplay(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
      this.setState({display:"block"})
    }
    else{
      this.setState({display:"none"})
    }
  }

  arrow(){
    let ani;
    let x=Math.ceil(document.body.scrollTop / 60) || Math.ceil(document.documentElement.scrollTop / 60);
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      document.body.scrollTop -= x+3;
      document.documentElement.scrollTop -= x+3;
      ani=requestAnimationFrame(()=>this.arrow());
      
    }
    else{
      // document.body.scrollTop -= 1;
      // document.documentElement.scrollTop -= 1;
      // if(document.body.scrollTop === 0 || document.documentElement.scrollTop === 0){
      cancelAnimationFrame(ani);
      // }
      
    }
  }

  Zoom(e){
    if(e.target.className==='zoom_out'){
      e.target.className='zoom_in';
    }
    else{
      e.target.className='zoom_out';
    }
  }

  Change(x){
    switch(x){
      case "istoggle":
      this.setState(prevState=>({istoggle:!prevState.istoggle}));
      break;
      case "view":
      this.setState({view:true});
      break;
      default:
      alert(x);
    }
  }

  View(e){
    if(e.target.className==='one_floor')
    {
      if(this.state.view===true){
        this.Change('istoggle');
      }
      this.setState({
        view:true
      })
  }
    else if(e.target.className==='two_floor'){
      this.setState({
        view:false
      })
    }
    // return false;  
}
 
  render() {
    const list_one=[
      {id:0,text:'什麼是JSX??',hash:'#what_jsx'},
      {id:1,text:'那ES6的標準又跟ES5差在哪呢？',hash:'#es_different'}
    ];

    let tag_Ul=<Ul li={list_one} toggle={this.state.istoggle} click={()=>this.Change('view')}/>

    const titles=[
      {id:0,name:'初學 React',ul:tag_Ul,floor:'one_floor',hash:'test'},
      {id:1,name:'使用 NPM 套件',floor:'two_floor',hash:'tset'}
    ];    
    // const list_two=[{id:0,text:'什麼事JSX??'},{id:0,text:'那ES6的標準又跟ES5差在哪呢？'}];
    return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src='static/media/logo.5d5d9eef.svg' className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <div className='main'>
      <Nav title={titles} click={(e)=>this.View(e)}/>
      <Secsion view={this.state.view} click={(e)=>this.Zoom(e)}/>
      </div>
      <div className={"arrow "+this.state.display} onClick={()=>this.arrow()}>&#8679;</div>
    </div>
    );
  }
}

export default App;

