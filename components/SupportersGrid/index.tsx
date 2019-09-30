import { Grid, Supporter, AvatarContainer, Avatar } from './styles'
import supporters from '../../config/supporters'
import { StarCircle } from '../Icons';

export default ({ state }) => {
  const selection = supporters.filter(supporter => supporter.state === state)
  if (!selection || selection.length === 0) return null
  
  return (
    <Grid>
      {selection.map(supporter => (
        
        <Supporter key={supporter.name}>
        <AvatarContainer>
            <Avatar alt={`${supporter.name}'s profile photo`} src={supporter.image} />
            {supporter.dayOne && <StarCircle /> }
          </AvatarContainer>
        
          {supporter.name}
        </Supporter>
        
      ))}
    </Grid>
  )
}