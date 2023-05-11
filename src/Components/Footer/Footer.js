import Style from "./Footer.module.css"
import { connect } from 'react-redux';
function Footer(props) {
    return (
      <div className={Style.Footer}>
          {props.auth.connection?"":"!!!!Немає з'єднання з сервером або з інтернетом, будь ласка оновіть сторінку коли з'єднання знову буде дійсне!!!!"}
      </div>
    );
  }
  
  const mapStateToProps = (store) => {

    return {
      auth: store.auth  
    };
  };

  export default connect(
    mapStateToProps,
  )(Footer);

  