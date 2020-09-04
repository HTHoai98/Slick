import styled from "@emotion/styled";
import { Form, Input } from "antd";
import PropTypes from "prop-types";

const { Item } = Form;
const { TextArea } = Input;

function InputCustom({
    id = "input",
    label = "Placeholder Label",
    type = "text",
    name = "input",
    rules = [],
}) {
    const [isActive, setIsActive] = React.useState(false);
    const inputEl = React.useRef(null); // (useRef) returns a mutable ref object

    //to input
    const Type = new Map()
        .set("text", {
            render: (
                <Input
                    ref={inputEl}
                    id={id}
                    type={type}
                />
            ),
            value:
                inputEl.current && inputEl.current.input
                    ? inputEl.current.input.value
                    : "",
        })
        .set("number", {
            render: <Input ref={inputEl} id={id} type={type} />,
            value:
                inputEl.current && inputEl.current.input
                    ? inputEl.current.input.value
                    : "",
        })
        .set("email", {
            render: <Input ref={inputEl} id={id} type={type} />,
            value:
                inputEl.current && inputEl.current.input
                    ? inputEl.current.input.value
                    : "",
        })
        .set("password", {
            render: <Input.Password ref={inputEl} id={id} type={type} />,
            value:
                inputEl.current && inputEl.current.input
                    ? inputEl.current.input.value
                    : "",
        })
        .set("textarea", {
            render: (
                <TextArea
                    ref={inputEl}
                    id={id}
                />
            ),
            value:
                inputEl.current && inputEl.current.state
                    ? inputEl.current.state.value
                    : "",
        });

    return (
        <Item //display 2 o input
            shouldUpdate={(prevValues, curValues) =>
                prevValues[name] !== curValues[name]
            }
            noStyle
        >
            {({ getFieldValue }) => {
                return (
                    <Wrapper isActive={!!getFieldValue(name) || isActive}>
                        <WrapperInput
                            label={label}
                            htmlFor={id}
                            istype={type}
                            name={name}
                            rules={rules}
                        >
                            {Type.get(type).render}
                        </WrapperInput>
                    </Wrapper>
                );
            }}
        </Item>
    );
}

InputCustom.propTypes = {
    id: PropTypes.string,
    form: PropTypes.any,
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    rules: PropTypes.array,
};

export default InputCustom;

const Wrapper = styled.div`
  .ant-form-item {
    &-label {
      position: absolute;
      left: 15px;
      max-width: calc(100% - 30px);
      padding: 0;
      transition: all 0.3s ease;
      z-index: 1;
      line-height: 1;

      label {
        height: auto;
        padding: 0 3px;
        font-size: 16px;
        font-weight: 300;
        margin-bottom: 0;
        color: #484848;

        &:before {
          order: 1;
          margin-right: 0;
          margin-left: 4px;
        }

        &:after {
          order: 2;
          display: none;
        }
      }

      ${(props) =>
        props.isActive
            ? `
            top: 0 !important;
            transform: translateY(-7px);
            background-color: #fff;

            label {
                font-weight: 700;
                font-size: 14px;
                line-height: 1;
            }
          `
            : ``};
    }

    &-control {
      input,
      textarea {
        border: 2px solid transparent;
        border-radius: 8px;

        ${(props) =>
        props.isActive
            ? `
                background-color: #fff;
                border-color: #ccc;
              `
            : `
                background-color: #f3f3f3;
              `};
      }
    }
  }
`;

const WrapperInput = styled(Item)`
  width: 100%;
  position: relative;
  margin-bottom: 30px;

  .ant-form-item {
    &-label {
      ${(props) =>
        props.istype === "textarea"
            ? `
                top: 20px;
              `
            : `
                top: 50%;
                transform: translateY(-50%);
              `}
    }

    &-control {
      input,
      textarea {
        width: 100%;
        padding: 12px 15px;
        font-size: 16px;
        line-height: 1.375;
        transition: all 0.3s ease;
        box-shadow: none;
      }

      .ant-input-affix-wrapper {
        padding: 0;
        border: 0;

        &.ant-input-affix-wrapper-focused {
          box-shadow: none;
        }

        > input.ant-input {
          padding: 12px 15px;

          &:hover,
          &-focused {
            outline: none;
            box-shadow: none;
            border-color: #ccc;
          }
        }

        .ant-input-suffix {
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
        }
      }

      .ant-input-password {
        .anticon-eye {
          &:after {
            content: "HIDE";
            font-weight: 700;
          }

          &-invisible {
            &:after {
              content: "SHOW";
              font-weight: 700;
            }
          }
        }

        svg {
          display: none;
        }
      }
    }

    &-explain {
      position: absolute;
      bottom: -26px;
    }
  }
`;
