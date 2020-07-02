import React from 'react';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Task } from '../store/tasks/types';
import { CalendarBlock as CalendarBlockType } from '../store/calendar/types';
import { addTask, } from '../store/tasks/slices';
import './Calendar.css';
import { RootState } from '../store';

interface CalendarBlockProps {

  name: string;

  /**
   * Things to do during this block of time
   */
  tasks?: Task[];

  start: Date;

  end: Date;

  color?: string;
}
/**
 * The basic "Eventually" unit of organization
 */
class CalendarBlock extends React.Component<CalendarBlockProps> {

  render() {
    return (
      <div className="calendar-block">
        <div>{this.props.name}</div>
        <ul>
          {this.props.tasks}
        </ul>
      </div>
    )
  }
}

interface CalendarDayProps {

  /**
   * The date correseponding to this calendar day.
   */
  date: Date;

  /**
   * Schedule blocks for this time.
   */
  blocks: CalendarBlockType[];
}

class CalendarDay extends React.Component<CalendarDayProps> {

  get date() {
    // TODO: Convert date to user-readable date
    return this.props.date;
  }

  private generateBlocks() {
    const allBlocks = this.props.blocks;
    const blocks = [];
    let currentTime = 0; // Start of day
    for (let i = 1; i < allBlocks.length; ++i) {
      let block = allBlocks[i];
      const lastBlock = allBlocks[i - 1];
      // TODO: Calculate blocks based on units of time
      // TODO: Check if difference is greater than "transitionInterval"
      if (block.start.getUTCMilliseconds() - lastBlock.end.getUTCMilliseconds() > 0) {
        // Insert "dummy block"
        const newBlock = <CalendarBlock name={'Empty'} start={new Date(currentTime)} end={block.start}></CalendarBlock>
        blocks.push(newBlock);
      } else {
        blocks.push(block);
      }
    }
    return blocks;
  }

  render() {
    const timeBlocks = this.generateBlocks();
    return (
      <div className="calendar-day">
        {timeBlocks}
      </div>
    )
  }
}

interface EventuallyCalendarProps {

}

interface EventuallyCalendarState {

  /**
   * 
   */
  blocks: CalendarBlockType[];

  /**
   * 
   */
  currentTime: Date;
}

/**
 * The main calendar UI.
 */
class EventuallyCalendar extends React.Component<EventuallyCalendarProps, EventuallyCalendarState> {

  private timerId: any;

  constructor(props: any) {
    super(props);
    this.state = {
      blocks: [],
      currentTime: new Date(),
    };
  }
  
  private displayEvents = () => {

  };

  public componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick();
    },
    1000); // TODO: Make timer interval changeable
  }

  private tick() {
    this.setState({
      ...this.state,
      currentTime: new Date(),
    });
  }

  public componentWillUnmount() {
    clearInterval(this.timerId);
  }

  private loadDays(): CalendarDay[] {
    const startDate = new Date();
    return [];
  }

  public render() {
    const days = this.loadDays();
    const dayBlocks = days.map(day => (
      <Grid item key={day.date.getUTCMilliseconds()}>
        <CalendarDay date={new Date()} blocks={this.state.blocks}></CalendarDay>
      </Grid>
    ));
    return (
      <Container>
        <section>
          {/* Sidebar */}
        </section>
        <main>
          <Grid container spacing={0}>
            {dayBlocks}
          </Grid>
        </main>
      </Container>
    );
  }
}

const mapState = (state: RootState) => ({
  events: state.events,
});

const actionCreators = {
  addTask,
};

const connector = connect(mapState, actionCreators);

const ConnectedCalendar = connector(EventuallyCalendar);

export default ConnectedCalendar;
