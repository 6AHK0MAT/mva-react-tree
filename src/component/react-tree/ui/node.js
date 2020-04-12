import cx from 'classnames';
import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

class UITreeNode extends Component {
    constructor(props) {
        super(props);
        this.innerRef = React.createRef();

        this.state = {
            isHovered: false,
            // isHovered: true,
        }
    }

    handleEnter() {
        this.setState({
            isHovered: true
        });
    }

    handleLeave() {
        this.setState({
            isHovered: false
        });
    }
    handleAdd() {
        // console.log('this.props.index - ', this.props.index)
        // console.log('this.props.data - ', this.props.data)
        // console.log('this.props - ', this.props)
        console.log('this.props.data.obj - ', this.props.data.obj)
    }
    handleEdit(index) {
        // console.log('this.props.index - ', this.props.index)
        // console.log('this.props.data - ', this.props.data)
        // console.log('this.props - ', this.props)
        console.log('Edit element - ', index)
        // console.log('this.props.data.obj - ', this.props.data.obj)
    }
    handleDelete() {
        console.log('this.props.data - ', this.props.data)
        // let arr = (this.props.data.indexes)
        // console.log('this.props.data.obj.id -', this.props.data.obj.id)
        // let index = this.props.index.id
        // arr.splice(index, 1);
    }


    renderCollapse = () => {
        // console.log(this.props)
        const {index} = this.props;

        if (index.children && index.children.length) {
            const {collapsed} = index.node;

            return (
                <span
                    className={cx('collapse', collapsed ? 'caret-right' : 'caret-down')}
                    onMouseDown={e => e.stopPropagation()}
                    onClick={this.handleCollapse}
                >
                    {/*{index.children}*/}
                </span>
            );
        }

        return null;
    };

    renderChildren = () => {
        const {index, data} = this.props;

        if (index.children && index.children.length) {
            const childrenStyles = {
                paddingLeft: this.props.paddingLeft
            };

            return (
                <div className="children" style={childrenStyles}>
                    {index.children.map(child => {
                        const childIndex = data.getIndex(child);

                        return (
                            <UITreeNode
                                data={data}
                                index={childIndex}
                                key={childIndex.id}
                                paddingLeft={this.props.paddingLeft}
                                onCollapse={this.props.onCollapse}
                            />
                        );
                    })}
                </div>
            );
        }

        return null;
    };

    render() {
        const {data, index} = this.props;
        // console.log('Index in render -', index)
        const {node} = index;
        const styles = {};

        return (
            <div
                className={cx('m-node')}
                style={styles}
            >
                <div
                    className="inner"
                    ref={this.innerRef}
                    onMouseDown={this.handleMouseDown}
                    onMouseEnter={this.handleEnter.bind(this)}
                    onMouseLeave={this.handleLeave.bind(this)}
                >
                    {this.renderCollapse()}
                    <span>{data.renderNode(node)}</span>
                    {/*<span>{node}</span>*/}

                    {this.state.isHovered ? (
                            <span className="buttons">
                                {<button onClick={this.handleAdd.bind(this)}><FontAwesomeIcon icon={faPlus}/></button>}
                                {<button onClick={() => this.handleEdit(index)}><FontAwesomeIcon icon={faEdit}/></button>}
                                {<button onClick={this.handleDelete.bind(this)}><FontAwesomeIcon icon={faTrashAlt}/></button>}
                            </span>
                        )
                        : null}
                </div>
                {node.collapsed ? null : this.renderChildren()}
            </div>
        );
    }

    handleCollapse = e => {
        e.stopPropagation();
        const nodeId = this.props.index.id;
        // console.log(this.props.index.id)

        if (this.props.onCollapse) {
            this.props.onCollapse(nodeId);
        }
    };
}
export default UITreeNode;
