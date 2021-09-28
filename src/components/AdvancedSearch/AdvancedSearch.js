import React from "react";
import "./AdvancedSearch.css";
function AdvancedSearch({searchoptions,setSearchOptions,dateoptions,setDateOptions}) {
  
  return (
    <div className="parameters">
      <table>
        <tbody>
          <tr>
            <td>
              <table className="parameter">
                <tbody>
                  <tr>
                    <td className="label-holder">
                      <label htmlFor="param-page">page</label>
                    </td>
                    <td>
                      <input
                        className="parameter-input"
                        id="param-page"
                        type="number"
                        name="page"
                        value={searchoptions.page}
                        onChange={(text) =>
                          setSearchOptions((prevSearchOptions) => ({
                            ...prevSearchOptions,
                            page: text.target.value,
                          }))
                        }
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table className="parameter">
                <tbody>
                  <tr>
                    <td className="label-holder">
                      <label htmlFor="param-pagesize">pagesize</label>
                    </td>
                    <td>
                      <input
                        className="parameter-input"
                        id="param-pagesize"
                        type="number"
                        name="pagesize"
                        value={searchoptions.pagesize}
                        onChange={(text) =>
                          setSearchOptions((prevSearchOptions) => ({
                            ...prevSearchOptions,
                            pagesize: text.target.value,
                          }))
                        }
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table className="parameter">
                <tbody>
                  <tr>
                    <td className="label-holder">
                      <label htmlFor="param-fromdate">fromdate</label>
                    </td>
                    <td>
                      <input
                        className="parameter-input"
                        id="param-fromdate"
                        type="date"
                        name="fromdate"
                        value={dateoptions.fromdate}
                        onChange={(text) =>{
                          setDateOptions((prevDateOptions) => ({
                            ...prevDateOptions,
                            fromdate: text.target.value,
                          }))
                          var new_date=new Date(text.target.value)
                          setSearchOptions((prevSearchOptions) => ({
                            ...prevSearchOptions,
                            fromdate: new_date.getTime()/1000,
                          }))
                        }
                        }
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table className="parameter">
                <tbody>
                  <tr>
                    <td className="label-holder">
                      <label htmlFor="param-todate">todate</label>
                    </td>
                    <td>
                      <input
                        className="parameter-input"
                        id="param-todate"
                        type="date"
                        name="todate"
                        value={dateoptions.todate}
                        onChange={(text) =>{
                          setDateOptions((prevDateOptions) => ({
                            ...prevDateOptions,
                            todate: text.target.value,
                          }))
                          var new_date=new Date(text.target.value)
                          setSearchOptions((prevSearchOptions) => ({
                            ...prevSearchOptions,
                            todate: new_date.getTime()/1000,
                          }))
                        }}
                        />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table className="parameter">
                <tbody>
                  <tr>
                    <td className="label-holder">
                      <label htmlFor="param-min">min</label>
                    </td>
                    <td>
                      <input
                        className="parameter-input"
                        id="param-min"
                        type="date"
                        name="min"
                        value={dateoptions.min}
                        onChange={(text) =>{
                          setDateOptions((prevDateOptions) => ({
                            ...prevDateOptions,
                            min: text.target.value,
                          }))
                          var new_date=new Date(text.target.value)
                          setSearchOptions((prevSearchOptions) => ({
                            ...prevSearchOptions,
                            min: new_date.getTime()/1000,
                          }))
                        }}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
            <table className="parameter">
                <tbody>
                  <tr>
                    <td className="label-holder">
                      <label htmlFor="param-max">max</label>
                    </td>
                    <td>
                      <input
                        className="parameter-input"
                        id="param-max"
                        type="date"
                        name="max"
                        value={dateoptions.max}
                        onChange={(text) =>{
                          setDateOptions((prevDateOptions) => ({
                            ...prevDateOptions,
                            max: text.target.value,
                          }))
                          var new_date=new Date(text.target.value)
                          setSearchOptions((prevSearchOptions) => ({
                            ...prevSearchOptions,
                            max: new_date.getTime()/1000,
                          }))
                        }}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            
            </td>
          </tr>
          <tr>
            <td>
              <table className="parameter">
                <tbody>
                  <tr>
                    <td className="label-holder">
                      <label htmlFor="param-accepted">accepted</label>
                    </td>
                    <td>
                      <select
                        name="accepted"
                        id="param-accepted"
                        className="parameter-select"
                        value={searchoptions.accepted}
                        onChange={(text) =>
                          setSearchOptions((prevSearchOptions) => ({
                            ...prevSearchOptions,
                            accepted: text.target.value,
                          }))
                        }
                      >
                        <option></option>
                        <option>True</option>
                        <option>False</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table className="parameter">
                <tbody>
                  <tr>
                    <td className="label-holder">
                      <label htmlFor="param-answers">answers</label>
                    </td>
                    <td>
                      <input
                        className="parameter-input"
                        id="param-answers"
                        type="text"
                        name="answers"
                        value={searchoptions.answers}
                        onChange={(text) =>
                          setSearchOptions((prevSearchOptions) => ({
                            ...prevSearchOptions,
                            answers: text.target.value,
                          }))
                        }
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table className="parameter">
                <tbody>
                  <tr>
                    <td className="label-holder">
                      <label htmlFor="param-body">body</label>
                    </td>
                    <td>
                      <input
                        className="parameter-input"
                        id="param-body"
                        type="text"
                        name="body"
                        value={searchoptions.body}
                        onChange={(text) =>
                          setSearchOptions((prevSearchOptions) => ({
                            ...prevSearchOptions,
                            body: text.target.value,
                          }))
                        }
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table className="parameter">
                <tbody>
                  <tr>
                    <td className="label-holder">
                      <label htmlFor="param-migrated">migrated</label>
                    </td>
                    <td>
                      <select
                        name="migrated"
                        id="param-migrated"
                        className="parameter-select"
                        value={searchoptions.migrated}
                        onChange={(text) =>
                          setSearchOptions((prevSearchOptions) => ({
                            ...prevSearchOptions,
                            migrated: text.target.value,
                          }))
                        }
                      >
                        <option></option>
                        <option>True</option>
                        <option>False</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table className="parameter">
                <tbody>
                  <tr>
                    <td className="label-holder">
                      <label htmlFor="param-notice">notice</label>
                    </td>
                    <td>
                      <select
                        name="notice"
                        id="param-notice"
                        className="parameter-select"
                        value={searchoptions.notice}
                        onChange={(text) =>
                          setSearchOptions((prevSearchOptions) => ({
                            ...prevSearchOptions,
                            notice: text.target.value,
                          }))
                        }
                      >
                        <option></option>
                        <option>True</option>
                        <option>False</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table className="parameter">
                <tbody>
                  <tr>
                    <td className="label-holder">
                      <label htmlFor="param-nottagged">nottagged</label>
                    </td>
                    <td>
                      <input
                        className="parameter-input"
                        id="param-nottagged"
                        type="text"
                        name="nottagged"
                        value={searchoptions.nottagged}
                        onChange={(text) =>
                          setSearchOptions((prevSearchOptions) => ({
                            ...prevSearchOptions,
                            nottagged: text.target.value,
                          }))
                        }
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table className="parameter">
                <tbody>
                  <tr>
                    <td className="label-holder">
                      <label htmlFor="param-tagged">tagged</label>
                    </td>
                    <td>
                      <input
                        className="parameter-input"
                        id="param-tagged"
                        type="text"
                        name="tagged"
                        value={searchoptions.tagged}
                        onChange={(text) =>
                          setSearchOptions((prevSearchOptions) => ({
                            ...prevSearchOptions,
                            tagged: text.target.value,
                          }))
                        }
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table className="parameter">
                <tbody>
                  <tr>
                    <td className="label-holder">
                      <label htmlFor="param-title">title</label>
                    </td>
                    <td>
                      <input
                        className="parameter-input"
                        id="param-title"
                        type="text"
                        name="title"
                        value={searchoptions.title}
                        onChange={(text) =>
                          setSearchOptions((prevSearchOptions) => ({
                            ...prevSearchOptions,
                            title: text.target.value,
                          }))
                        }
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table className="parameter">
                <tbody>
                  <tr>
                    <td className="label-holder">
                      <label htmlFor="param-user">user</label>
                    </td>
                    <td>
                      <input
                        className="parameter-input"
                        id="param-user"
                        type="number"
                        name="user"
                        value={searchoptions.user}
                        onChange={(text) =>
                          setSearchOptions((prevSearchOptions) => ({
                            ...prevSearchOptions,
                            user: text.target.value,
                          }))
                        }
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table className="parameter">
                <tbody>
                  <tr>
                    <td className="label-holder">
                      <label htmlFor="param-url">url</label>
                    </td>
                    <td>
                      <input
                        className="parameter-input"
                        id="param-url"
                        type="text"
                        name="url"
                        value={searchoptions.url}
                        onChange={(text) =>
                          setSearchOptions((prevSearchOptions) => ({
                            ...prevSearchOptions,
                            url: text.target.value,
                          }))
                        }
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table className="parameter">
                <tbody>
                  <tr>
                    <td className="label-holder">
                      <label htmlFor="param-views">views</label>
                    </td>
                    <td>
                      <input
                        className="parameter-input"
                        id="param-views"
                        type="text"
                        name="views"
                        value={searchoptions.views}
                        onChange={(text) =>
                          setSearchOptions((prevSearchOptions) => ({
                            ...prevSearchOptions,
                            views: text.target.value,
                          }))
                        }
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table className="parameter">
                <tbody>
                  <tr>
                    <td className="label-holder">
                      <label htmlFor="param-wiki">wiki</label>
                    </td>
                    <td>
                      <select
                        name="wiki"
                        id="param-wiki"
                        className="parameter-select"
                        value={searchoptions.wiki}
                        onChange={(text) =>
                          setSearchOptions((prevSearchOptions) => ({
                            ...prevSearchOptions,
                            wiki: text.target.value,
                          }))
                        }
                      >
                        <option></option>
                        <option>True</option>
                        <option>False</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdvancedSearch;
