import React, { Component } from 'react';
import * as API from '../utils/api';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import Score from './score';
import EditButtons from './edit-buttons';


class Post extends Component {
  initialState = {
    isModalOpen: false,
  };

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  upvotePost(){
    const post_id = this.props.post.id;
    API.upvotePost(post_id).then(post => {
      this.props.upvotePost({
        type: actions.UPVOTE_POST,
        post_id
      });
    });
  }

  downvotePost(){
    const post_id = this.props.post.id;
    API.downvotePost(post_id).then(post => {
      this.props.downvotePost({
        type: actions.DOWNVOTE_POST,
        post_id
      });
    });
  }

  deletePost(){
    if(window.confirm('Delete Post?')){
      const post_id = this.props.post.id;
      API.deletePost(post_id).then(() => {
        this.props.deletePost({
          type: actions.DELETE_POST,
          post_id
        });
        this.props.history.push('/');
      });
    };
  }

  editPost(){
    this.openModal();
  }

  openModal(){
    this.setState({ isModalOpen: true });
  }

  closeModal(){
    this.setState({ isModalOpen: false });
  }

  generateModal(post){
    const { isModalOpen } = this.state;
    const modalStyle = {
      content: {
       top: '10%',
       left: '10%',
       right: '10%',
       bottom: 'auto',
      }
    };

    return (
      <Modal
        style={ modalStyle }
        isOpen={ isModalOpen }
        onAfterOpen={ () => {} }
        onRequestClose={ () => {} }
        closeTimeoutMS={0}
        shouldCloseOnOverlayClick={true}
        contentLabel="Edit Post">
        <h2>Edit Post</h2>
      </Modal>
    )
  }

  generateTitle(post, is_detail) {
    if (is_detail) {
      return <h1>{ post.title }</h1>;
    } else{
      return <Link to={`/${post.category}/${post.id}`}><h2>{post.title}</h2></Link>;
    }
  }

  generateEditButtons(is_detail) {
    if(is_detail) {
      return <EditButtons onEdit={() => {this.editPost()}} onDelete={() => {this.deletePost()}} />;
    } else {
      return null;
    }
  }

  render() {
    const { post } = this.props;
    const { is_detail } = this.props;

    return (
      <div>
        { this.generateTitle(post, is_detail) }
        <p>by { post.author } in <Link to={`/${ post.category }`}>{post.category}</Link></p>
        <p>{ post.body }</p>
        <Score score={post.voteScore}
          onUpvote={() => {this.upvotePost()}} onDownvote={() => {this.downvotePost()}} />
        { this.generateEditButtons(is_detail) }
        { this.generateModal(post) }
      </div>
    );
  }
}

function mapStateToProps({ posts }){
  return {
    posts,
  }
}

function mapDispatchToProps(dispatch){
  return {
    upvotePost: (post_id) => dispatch(actions.upvotePost(post_id)),
    downvotePost: (post_id) => dispatch(actions.downvotePost(post_id)),
    deletePost: (post_id) => dispatch(actions.deletePost(post_id)),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Post);
