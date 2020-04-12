import cx from 'classnames';
import React, { Component } from 'react';

export default class UITreeNode extends Component {
    constructor(props) {
        super(props);
        this.innerRef = React.createRef();
    }

    renderCollapse = () => {
        const { index } = this.props;

        if (index.children && index.children.length) {
            const { collapsed } = index.node;

            return (
                <span
                    className={cx('collapse', collapsed ? 'caret-right' : 'caret-down')}
                    onMouseDown={e => e.stopPropagation()}
                    onClick={this.handleCollapse}
                />
            );
        }

        return null;
    };

    renderChildren = () => {
        const { index, data} = this.props;

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
        const { data, index } = this.props;
        const { node } = index;
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
                >
                    {this.renderCollapse()}
                    {data.renderNode(node)}
                </div>
                {node.collapsed ? null : this.renderChildren()}
            </div>
        );
    }

    handleCollapse = e => {
        e.stopPropagation();
        const nodeId = this.props.index.id;

        if (this.props.onCollapse) {
            this.props.onCollapse(nodeId);
        }
    };
}
