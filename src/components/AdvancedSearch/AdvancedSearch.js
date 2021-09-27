import React from "react";
import "./AdvancedSearch.css";
function AdvancedSearch() {
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
                      <label htmlFor="param-closed">closed</label>
                    </td>
                    <td>
                      <select
                        name="closed"
                        id="param-closed"
                        className="parameter-select"
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
                      <label htmlFor="param-migrated">migrated</label>
                    </td>
                    <td>
                      <select
                        name="migrated"
                        id="param-migrated"
                        className="parameter-select"
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
                        type="text"
                        name="user"
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
