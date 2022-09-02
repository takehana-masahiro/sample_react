import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class AppSecond extends Component {
  constructor(props) {
    super(props);
    this.state = {searchKeyWord: "",
                  name: "name",
                  resultList: [],
                  resultData: Object,
                  searchFlg: false,
                  flavor: "",
                  searchName: "",
                  shinyFlg: false,
                  message: "message",
                 };

    this.onSearch = this.onSearch.bind(this);
    this.changeShiny = this.changeShiny.bind(this);
  }

  changeShiny() {
    const shinyFlg = this.state.shinyFlg;
    this.setState(state => ({
      shinyFlg: !shinyFlg,
    }));
  }

  onSearch() {
    const key = this.state.searchKeyWord;
    alert(key);

    this.setState(state => ({
      searchName: "",
      shinyFlg: false,
    }));

    // ajax

    // fetch

    fetch('https://jcy6nryuwg.execute-api.ap-northeast-1.amazonaws.com/samplestage/pets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //'Access-Control-Allow-Headers': '*',
        'Authorization': 'eyJraWQiOiJqcko4dGV1RTdpaStjWEVKRnhuV2t4TlBzQmJXcjhPU25jclNSSmdNVUNBPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1OTViNzYzYy1lMTBhLTQ3NTAtOGYzYS1hNzM2ZDk0ZDRmNmQiLCJhdWQiOiI1c2htb29wazZzM3Vpb3Yxa3Y1ZDhobm9sOCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjZlMzMwYmJlLWZlNTgtNDIxMy04ZGE4LTc4Y2NiMDA1NzkyZCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjYyMDk4NTc3LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtbm9ydGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtbm9ydGhlYXN0LTFfbGpZVkJKdFpKIiwiY29nbml0bzp1c2VybmFtZSI6InNhbXBsZXVzZXIyIiwiZXhwIjoxNjYyMTAyMTc3LCJpYXQiOjE2NjIwOTg1NzcsImVtYWlsIjoibWFzYWhpcm8tdGFrZWhhbmFAZW1kZXMuY28uanAifQ.l91VN3fhPXHWpFOabX1HJBKXTbA5CyrOfImkBMh61ptrT9OMAZ7TDMEgQ5qXPAR-Wd5GEX8eARb0DTTLlLquV40qqmLTfaCr38xzJmtlx3EYeOm_WvHwZ9YkftcF1p4YWYYAygn7Uj36bTx4v65LdqRYn87wcXOOE8HMfnDVE3Oed1DN9VJdcaT3NyCpQ1K_is8AJDVBMa5I7dTKNHHLgHSnVqhxO-6VIOrMS5PXrQ7blYf9pEzkPFl0KAvGBrdVpKD8rNrwv5W_RDs6hpjvDHvv490OpAnPg5xg5jyjelJIwgjZVKn2v8pYGg_VOEMyRysNs4_C-6MDGrb3PYcx4w'
      },
      body: ''
    })
    .then(res => res.json())
    .then(res => {
      const results = res;
      const message = results.errors[0].message;
      this.setState(state => ({
        message: message,
      }));
      console.log(message);
     })
     .catch(error => {
      console.log(key + "ないです");
     });

  }

  render() {
    return(
      <>
      <div className="AppSecond">
        <div>
          <img src="https://joeschmoe.io/api/v1/random" alt="サムネイル" width="10%" height="10%" />
          {this.state.name}は何を表示するのか。
        </div>
        <input type="text" id="searchKeyWord" placeholder='検索ワード'
               value={this.state.searchKeyWord} onChange={(e) => this.setState({searchKeyWord: e.target.value})} />
        <button onClick={this.onSearch}>検索</button>
        <div>
        {this.state.message}
        </div>
      </div>
      <style>{`
        .AppSecond {
          text-align: center;
        }
      
        .App-logo {
          height: 40vmin;
          pointer-events: none;
        }
      
        @media (prefers-reduced-motion: no-preference) {
          .App-logo {
            animation: App-logo-spin infinite 20s linear;
          }
        }
      
      .App-header {
        background-color: #282c34;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
      }
      
      .App-link {
        color: #61dafb;
      }
      
      @keyframes App-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .table {
        width: 100%;
        border-spacing: 0;
        table-layout: fixed;
        border: solid 1px #444;
      }
      `}

      </style>
      </>
    );
  }
}
export default AppSecond;
