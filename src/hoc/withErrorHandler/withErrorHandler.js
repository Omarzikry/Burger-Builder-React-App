import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/Auxiliary';
const withErrorHandler = (WrappedComponent , axios) => {
    return class extends Component{
        state = {
            error: null,
            allowMount:false
        }
        componentDidMount(){
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
            this.setState({
                allowMount:true
            })
        }
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }
        errorConfirmedHandler = () => {
            this.setState({error: null})
        };
        render(){
            let {allowMount, error} = this.state;
            return (
                <Aux>
                    <Modal show={error} modalClosed={this.errorConfirmedHandler}>
                        {error ? error.message: null}
                    </Modal>
                    { allowMount && <WrappedComponent {...this.props} />}
                </Aux>
            );
        };
    }
}

export default withErrorHandler;
