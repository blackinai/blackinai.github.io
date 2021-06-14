import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Button from './../../components/Button';
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, MenuList, ClickAwayListener, Paper, Grow, Divider, Popper } from "@material-ui/core/";

const styles = (theme) => ({
    popperClose: {
        pointerEvents: "none",
    },
    dropdown: {
        borderRadius: "3px",
        border: "0",
        boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
        top: "100%",
        zIndex: "1000",
        minWidth: "160px",
        padding: "5px 0",
        margin: "2px 0 0",
        textAlign: "left",
        listStyle: "none",
        backgroundColor: "#fff",
        backgroundClip: "padding-box",
        fontSize: theme.typography.fontSize,
    },
    menuList: {
        padding: "0",
        fontSize: theme.typography.fontSize,
    },
    popperResponsive: {
        zIndex: "1200",
        [theme.breakpoints.down("sm")]: {
          zIndex: "1640",
          position: "static",
          float: "none",
          width: "auto",
          marginTop: "0",
          backgroundColor: "transparent",
          border: "0",
          boxShadow: "none",
          color: "black",
        },
    },
    dropdownItem: {
        padding: "10px 20px",
        margin: "0 3px",
        borderRadius: "2px",
        position: "relative",
        transition: "all 150ms linear",
        display: "block",
        clear: "both",
        fontWeight: "400",
        height: "fit-content",
        color: "#333",
        whiteSpace: "nowrap",
        minHeight: "unset",
    },
    primaryHover: {
        "&:hover": {
          backgroundColor: theme.palette.secondary.dark,
          color: "#FFFFFF",
          boxShadow: "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)",
        },
    },
    dropdownItemRTL: {
        textAlign: "right",
        textTransform: "none",
        fontSize: theme.typography.fontSize,
    },
    dropdownDividerItem: {
        margin: "1px 0",
        backgroundColor: "rgba(0, 0, 0, 0.12)",
        height: "1px",
        overflow: "hidden",
    },
    caret: {
        transition: "all 150ms ease-in",
        display: "inline-block",
        width: "0",
        height: "0",
        marginLeft: "4px",
        verticalAlign: "middle",
        borderTop: "4px solid",
        borderRight: "4px solid transparent",
        borderLeft: "4px solid transparent",
    },
    caretActive: {
        transform: "rotate(180deg)",
    },
    caretRTL: {
        marginRight: "4px",
    },
    dropdownHeader: {
        display: "block",
        padding: "0.1875rem 1.25rem",
        lineHeight: "1.428571",
        color: "#777",
        whiteSpace: "nowrap",
        fontWeight: "inherit",
        marginTop: "10px",
        minHeight: "unset",
        fontSize: theme.typography.fontSize,
        "&:hover,&:focus": {
          backgroundColor: "transparent",
          cursor: "auto",
        },
    },
    noLiPadding: {
        padding: "0",
    },
});

const useStyles = makeStyles(styles);

export default function CustomDropdown(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        if (anchorEl && anchorEl.contains(event.target)) {
            setAnchorEl(null);
        } else {
            setAnchorEl(event.currentTarget);
        }
    };
    const handleClose = (param) => {
        setAnchorEl(null);
        if (props && props.onClick) {
            props.onClick(param);
        }
    };
    const handleCloseAway = (event) => {
        if (anchorEl.contains(event.target)) {
            return;
        }
        setAnchorEl(null);
    };
    const classes = useStyles();
    const {
        buttonText,
        dropdownList,
        buttonProps,
        dropup,
        dropdownHeader,
        caret,
        hoverColor,
        left,
        rtlActive,
        noLiPadding,
    } = props;
    const caretClasses = classNames({
        [classes.caret]: true,
        [classes.caretActive]: Boolean(anchorEl),
        [classes.caretRTL]: rtlActive,
    });
    const dropdownItem = classNames({
        [classes.dropdownItem]: true,
        [classes[hoverColor + "Hover"]]: true,
        [classes.noLiPadding]: noLiPadding,
        [classes.dropdownItemRTL]: rtlActive,
    });

    return (
        <div>
            <div>
                <Button
                    aria-label="Notifications"
                    aria-owns={anchorEl ? "menu-list" : null}
                    aria-haspopup="true"
                    {...buttonProps}
                    onClick={handleClick}
                >
                    {buttonText !== undefined ? buttonText : null}
                    {caret ? <b className={caretClasses} /> : null}
                </Button>
            </div>
            <Popper
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                transition
                disablePortal
                placement={
                    dropup
                        ? left
                            ? "top-start"
                            : "top"
                        : left
                            ? "bottom-start"
                            : "bottom"
                }
                className={classNames({
                    [classes.popperClose]: !anchorEl,
                    [classes.popperResponsive]: true,
                })}
            >
                {() => (
                    <Grow
                        in={Boolean(anchorEl)}
                        id="menu-list"
                        style={
                            dropup
                                ? { transformOrigin: "0 100% 0" }
                                : { transformOrigin: "0 0 0" }
                        }
                    >
                        <Paper className={classes.dropdown}>
                            <ClickAwayListener onClickAway={handleCloseAway}>
                                <MenuList role="menu" className={classes.menuList}>
                                    {dropdownHeader !== undefined ? (
                                        <MenuItem
                                            onClick={() => handleClose(dropdownHeader)}
                                            className={classes.dropdownHeader}
                                        >
                                            {dropdownHeader}
                                        </MenuItem>
                                    ) : null}
                                    {dropdownList.map((prop, key) => {
                                        if (prop.divider) {
                                            return (
                                                <Divider
                                                    key={key}
                                                    onClick={() => handleClose("divider")}
                                                    className={classes.dropdownDividerItem}
                                                />
                                            );
                                        }
                                        return (
                                            <MenuItem
                                                key={key}
                                                onClick={() => handleClose(prop)}
                                                className={dropdownItem}
                                            >
                                                {prop}
                                            </MenuItem>
                                        );
                                    })}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}

CustomDropdown.defaultProps = {
    caret: true,
    // hoverColor: "primary",
};

CustomDropdown.propTypes = {
    hoverColor: PropTypes.oneOf([
        "primary",
    ]),
    buttonText: PropTypes.node,
    dropdownList: PropTypes.array,
    buttonProps: PropTypes.object,
    dropup: PropTypes.bool,
    dropdownHeader: PropTypes.node,
    rtlActive: PropTypes.bool,
    caret: PropTypes.bool,
    left: PropTypes.bool,
    noLiPadding: PropTypes.bool,
    // function that retuns the selected item
    onClick: PropTypes.func,
};