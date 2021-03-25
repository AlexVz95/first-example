
type Props = {
    onChange: any;
    value: string;
    customStyle: any;
}
const CustomInput= (props: Props) => {
    const { onChange, value, customStyle } = props;
    return (
        <input value={value} onChange={onChange} style={customStyle}></input>
    ) 
}

export default CustomInput;