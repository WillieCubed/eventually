import React from 'react';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Task } from '../store/tasks/types';
import { CalendarBlock as CalendarBlockType } from '../store/events';
import './Calendar.css';

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
  blocks: CalendarBlockType[];
}

/**
 * The main calendar UI.
 */
export default class EventuallyCalendar extends React.Component<EventuallyCalendarProps, EventuallyCalendarState> {

  constructor(props: any) {
    super(props);
    this.state = {
      blocks: [],
    };
  }

  public render() {
    return (
      <Container>
        <section>
          {/* Sidebar */}
        </section>
        <main>
          <Grid container spacing={0}>
            {[0, 1, 2, 3].map(value => (
              <Grid item key={value}>
                <CalendarDay date={new Date()} blocks={this.state.blocks}>{value}</CalendarDay>
              </Grid>
            ))}
          </Grid>
        </main>
      </Container>
    );
  }
}