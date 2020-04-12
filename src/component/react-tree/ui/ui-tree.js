import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tree from 'js-tree'
import Node from './node';

class UITree extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        paddingLeft: PropTypes.number,
        renderNode: PropTypes.func.isRequired
    };

    static defaultProps = {
        paddingLeft: 20
    };

    constructor(props) {
        super(props);

        this.state = this.init(props);
    }
    componentDidMount() {
        // console.log('componentDidMount')
        // console.log()
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        // static getDerivedStateFromProps(nextProps) {
        if (!this._updated) {
            this.setState(this.init(nextProps));
        } else {
            this._updated = false;
        }
    }

    init = props => {
        const data = new Tree(props.data);
        // data.isNodeCollapsed = props.isNodeCollapsed;
        data.renderNode = props.renderNode;
        // data.changeNodeCollapsed = props.changeNodeCollapsed;
        return {
            data: data,
        };
    };


    render() {
        const data = this.state.data;

        return (
            <div className="m-tree">
                <Node
                    data={data}
                    index={data.getIndex(1)}
                    key={1}
                    paddingLeft={this.props.paddingLeft}
                    onCollapse={this.toggleCollapse}
                />
            </div>
        );
    }

    change = data => {
        this._updated = true;
        if (this.props.onChange) this.props.onChange(data.obj);
    };

    toggleCollapse = nodeId => {
        const data = this.state.data;
        const index = data.getIndex(nodeId);
        const node = index.node;
        node.collapsed = !node.collapsed;

        this.setState({
            data: data
        });

        this.change(data);
    };
}
export default UITree;
