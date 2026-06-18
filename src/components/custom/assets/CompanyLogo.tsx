interface Props {
  image_url:string,
  style_class:string
}

export default function CompanyLogo(props:Props) {
  return (
    <img
      src={props.image_url}
      alt="Profile"
      className={` ${props.style_class}`}
    />
  );
}