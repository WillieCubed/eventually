import { Task } from './tasks/types';

export interface Calendar {

}

export interface CalendarBlock {

  name: string;

  tasks?: Task[];

  events?: CalendarEvent;

  start: Date;

  end: Date;
}

/**
 * A traditional calendar event.
 */
export interface CalendarEvent {

  /**
   * The name of this event.
   */
  title: string;

  /**
   * Notes for this event.
   */
  description: string;

  /**
   * When this event starts.
   */
  start: Date;

  /**
   * When this event ends.
   */
  end: Date;

  /**
   * People invited to this calendar event.
   */
  invitees: CalendarInvitee[];

  /**
   * A generic container for 
   */
  attachments: CalendarAttachment[];
}

/**
 * An attachment for a {@link CalendarEvent}.
 */
export interface CalendarAttachment {

  /**
   * A label for this attachment.
   */
  title: string;

  /**
   * A metadata description for this event.
   */
  description: string;

  /**
   * A link to 
   */
  uri: string;
}

export interface CalendarInvitee {
  
  /**
   * The name of an invited person.
   */
  name: string;

  /**
   * The person's email address.
   */
  email: string;

  /**
   * A flag used to determine if enhanced event functionality should be shown.
   */
  eventuallyUser: boolean;
}
