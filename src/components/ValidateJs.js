import React, {PropTypes,Component} from 'react';
import logo from './../img/welcome.png';
import './../styles/main.scss';
import vqbValidator from './../validator/vqbValidator';


class ValidateJs extends Component {

  /**
   * RootComponent constructor
   * @param props
   */
  constructor(props) {
    super(props);
    this._initValidateJs();
    this.state = {
      errorStatus:false,
      txtTitle:'Sample',
      titleErrorMessages:''
    };
  }

  /**
   * Custom Function - Method binding to 'this'
   * @private
   */
  _initValidateJs() {
    //bind custom function here

  }

  callToValidator(validateNode,validateContent){
    let returnMessage = vqbValidator(validateNode,validateContent);
    console.info("#########");
    console.info(returnMessage);
    this.setState({
      errorStatus:returnMessage['status'],
      titleErrorMessages:returnMessage['message']
    })
  }

  titleOnChange(event){
    this.setState({
      txtTitle:event.target.value
    });
  }

  /**
   * Life Cycle function - render
   * @returns {XML}
   */
  render() {

    return (
    <form id="leftMenuForm">
      <div className="pe-container">
        <div className="pe-row">
          <div className={this.state.errorStatus?"pe-input pe-input--error":"pe-input"}>
            <label forHTML="i9">Title </label>
            <input
              type="text"
              id="txtTitle"
              aria-describedby="i9-error"
              value={this.state.txtTitle}
              onBlur={this.callToValidator.bind(this,'txtTitle',this.state.txtTitle)}
              onChange={this.titleOnChange.bind(this)}
            />
            <p hidden={!this.state.errorStatus} id="i9-error" className="pe-error-text">{this.state.titleErrorMessages}</p>
          </div>
        </div>
      </div>
    </form>


    );
  }
}

/**
 *
 * @type {{}}
 */
ValidateJs.propTypes = {};

/**
 *
 * @type {{}}
 */
ValidateJs.defaultProps = {};

export default ValidateJs;
