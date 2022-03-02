import Labels from '../components/Labels';
import { useContext } from 'react';
import { NumsResultsContext } from '../App'
import { FunctionsContext } from '../App'

export default function Results(){
  const {nums, tipAmount, total} = useContext(NumsResultsContext)
  const { refreshPage } = useContext(FunctionsContext)

    return(
        <div className='calcs'>

          <div className='tip-amount--person'>
          
            <Labels
              key={1}
              title="Tip Amount"
              person="/ person"
            />

            <div className='tip-person--result'>
              <p className="tip-result">${nums.numsOfPeople && nums.bill ? tipAmount : "0.00"}</p>
            </div>
          </div>

          <div className='total-amount--person'>
            <Labels
              key={2}
              title="Total"
              person="/ person"
            />

            <div className='total-person--result'>
              <p className="total-result">${nums.numsOfPeople && nums.bill ? total : "0.00"}</p>
            </div>
          </div>
          <div className='button-holder'>
            <input
              class={nums.numsOfPeople && nums.bill ? "reset resetActive" : "reset"}
              onClick={refreshPage}
              type="button"
              value="RESET" />
          </div>
        </div>
    )
}