import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) return <div>Loading...</div>;
    const currentUserId = this.props.stream.userId;
    if (!currentUserId || this.props.userId !== currentUserId) {
      return <div>You have not authorization to edit this stream.</div>;
    }
    const { title, description } = this.props.stream;
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={{ title, description }}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],

    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
