
export default function Button(props) {
   const {background, color, padding, borderRadius, fontWeight, width, margin} = props;
   return (
      <div>
         <a className='btn' href="#download" style={{background, color, padding, borderRadius, fontWeight, width, margin}} type='submit'>Download</a>
      </div>
   )
}
