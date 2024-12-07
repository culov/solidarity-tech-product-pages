# frozen_string_literal: true

# Re-generate API docs and upload:
# bundle exec rake rswag:specs:swaggerize
# README_API_KEY=$(grep 'README_API_KEY' .env | cut -d '=' -f2)
# rdme openapi swagger/v1/swagger.yaml --key=$README_API_KEY

require 'rails_helper'

RSpec.configure do |config|
  # Specify a root folder where Swagger JSON files are generated
  # NOTE: If you're using the rswag-api to serve API descriptions, you'll need
  # to ensure that it's configured to serve Swagger from the same folder
  config.openapi_root = Rails.root.join('swagger').to_s

  server_url = if Rails.env.test?
                 'http://api.localhost:3002/v1'
               else
                 'https://api.solidarity.tech/v1'
               end

  # Define one or more Swagger documents and provide global metadata for each one
  # When you run the 'rswag:specs:swaggerize' rake task, the complete Swagger will
  # be generated at the provided relative path under openapi_root
  # By default, the operations defined in spec files are added to the first
  # document below. You can override this behavior by adding a openapi_spec tag to the
  # the root example_group in your specs, e.g. describe '...', openapi_spec: 'v2/swagger.json'
  config.openapi_specs = {
    'v1/swagger.yaml' => {
      openapi: '3.0.1',
      info: {
        title: 'API V1',
        version: 'v1'
      },
      paths: {},
      security: [
        {
          BearerAuth: []
        }
      ],
      servers: [
        {
          url: server_url,
           variables: {
             defaultHost: {
              default: server_url.gsub(%r{https*://}, '')
             }
           }
        }
      ],
      components: {
        securitySchemes: {
          BearerAuth: { # You can name this key as you like
            type: :http,
                           scheme: :bearer
            # Omit bearerFormat if it's just a simple API key
          }
        },
        schemas: {
          User: {
            type: 'object',
             properties: {
               id: { type: 'integer' },
               hash_id: { type: 'string' },
               phone_number: { type: 'string', nullable: true },
               email: { type: 'string', nullable: true },
               first_name: { type: 'string', nullable: true },
               last_name: { type: 'string', nullable: true },
               preferred_language: { type: 'string' },
               second_language: { type: 'string', nullable: true },
               chapter_id: { type: 'integer' },
               branch_id: { type: 'integer', nullable: true },
               created_at: { type: 'string', format: 'date-time' },
               custom_user_properties: {
                 type: 'object',
                 additionalProperties: {
                   type: 'string'
                 }
               },
               address: {
                 type: 'object',
                 properties: {
                   address1: { type: 'string', nullable: true },
                   address2: { type: 'string', nullable: true },
                   city: { type: 'string', nullable: true },
                   state: { type: 'string', nullable: true },
                   zip_code: { type: 'string', nullable: true },
                   country: { type: 'string', nullable: true }
                 }
               },
               sms_permission: { type: 'boolean' },
               call_permission: { type: 'boolean' },
               email_permission: { type: 'boolean' }
             }
          },
          Chapter: {
            type: 'object',
            properties: {
              id: { type: 'integer' },
              name: { type: 'string' },
              logo_url: { type: 'string', nullable: true },
              organization_id: { type: 'integer' },
              chapter_phone_number: { type: 'string' }
            }
          },
          UserNote: {
            type: 'object',
            properties: {
              id: { type: 'integer' },
              content: { type: 'string' },
              user_id: { type: 'integer' }
            }
          },
          CustomUserProperty: {
            type: 'object',
            properties: {
              id: { type: 'integer' },
              name: { type: 'string' },
              key: { type: 'string' },
              field_type: { type: 'string' },
              options: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    label: { type: 'string' },
                    value: { type: 'string' }
                  }
                }
              },
              scope_id: { type: 'integer' },
              scope_type: { type: 'string' }
            }
          },
          Call: {
            type: 'object',
            properties: {
              id: { type: 'integer' },
              user_id: { type: 'integer' },
              direction: { type: 'string' },
              agent_user_id: { type: 'integer', nullable: true },
              duration: { type: 'integer' },
              picked_up: { type: 'boolean' },
              left_voicemail: { type: 'boolean' },
              twilio_call_sid: { type: 'string' },
              created_at: { type: 'string', format: 'date-time' },
              ended_at: { type: 'string', format: 'date-time' }
            }
          },
          Text: {
            type: 'object',
            properties: {
              id: { type: 'integer' },
              user_id: { type: 'integer' },
              direction: { type: 'string' },
              body: { type: 'string' },
              media_urls: {
                type: 'array',
                items: { type: 'string' }
              },
              segment_size: { type: 'integer' },
              chapter_phone_number_id: { type: 'integer' },
              twilio_error_code: { type: 'integer', nullable: true },
              created_at: { type: 'string', format: 'date-time' }
            }
          },
          Activity: {
            type: 'object',
            properties: {
              id: { type: 'integer' },
              user_id: { type: 'integer' },
              name: { type: 'string' },
              actionable_id: { type: 'integer' },
              actionable_type: { type: 'string' },
              action: {
                type: 'object',
                properties: {
                  id: { type: 'integer' },
                  user_id: { type: 'integer' },
                  agent_user_id: { type: 'integer', nullable: true },
                  field_type: { type: 'string', nullable: true },
                  old_value: { type: 'string', nullable: true },
                  new_value: { type: 'string', nullable: true },
                  data_import_id: { type: 'integer', nullable: true },
                  created_at: { type: 'string', format: 'date-time' },
                  updated_at: { type: 'string', format: 'date-time' }
                }
              },
              created_at: { type: 'string', format: 'date-time' },
              updated_at: { type: 'string', format: 'date-time' }
            }
          },
          Event: {
            type: 'object',
            properties: {
              id: { type: 'integer' },
              title: { type: 'string' },
              scope_id: { type: 'integer' },
              scope_type: { type: 'string', nullable: true },
              event_type: { type: 'string' },
              location_name: { type: 'string', nullable: true },
              location_data: {
                type: 'object',
                nullable: true,
                properties: {
                  components: { type: 'string' },
                  coordinates: { type: 'string' },
                  address_city: { type: 'string' },
                  full_address: { type: 'string' },
                  address_state: { type: 'string' },
                  address_line_1: { type: 'string' },
                  address_country: { type: 'string' },
                  address_postal_code: { type: 'string' }
                }
              },
              mobilize_event_sessions: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    id: { type: 'integer' },
                    mobilize_event_id: { type: 'integer' },
                    start_time: { type: 'string', format: 'date-time' },
                    end_time: { type: 'string', format: 'date-time' },
                    title: { type: 'string' },
                    created_at: { type: 'string', format: 'date-time' },
                    updated_at: { type: 'string', format: 'date-time' },
                    location_name: { type: 'string' },
                    location_data: {
                      type: 'object',
                      properties: {
                        components: { type: 'string' },
                        coordinates: { type: 'string' },
                        address_city: { type: 'string' },
                        full_address: { type: 'string' },
                        address_state: { type: 'string' },
                        address_line_1: { type: 'string' },
                        address_country: { type: 'string' },
                        address_postal_code: { type: 'string' }
                      }
                    },
                    lonlat: { type: 'string' },
                    location_address: { type: 'string' },
                    show_rsvp_bar: { type: 'boolean' },
                    show_title_in_form: { type: 'boolean' }
                  }
                }
              },
              rsvps_count: { type: 'integer' },
              attendance_count: { type: 'integer' },
              automation_status: {
                type: 'object',
                properties: {
                  rsvp_confirmation_email: { type: 'boolean' },
                  rsvp_confirmation_text: { type: 'boolean' },
                  day_before_email_reminder: { type: 'boolean' },
                  day_before_text_reminder: { type: 'boolean' },
                  day_of_email_reminder: { type: 'boolean' },
                  day_of_text_reminder: { type: 'boolean' }
                }
              },
              created_at: { type: 'string', format: 'date-time' }
            }
          },
          EventSession: {
            type: 'object',
            properties: {
              event_id: {
                type: 'integer',
                format: 'int64',
                description: 'Identifier for the Mobilize event',
                nullable: false
              },
              start_time: {
                type: 'integer',
                format: 'int64',
                description: 'UTC timestamp in seconds since the Unix epoch',
                nullable: true
              },
              end_time: {
                type: 'integer',
                format: 'int64',
                description: 'UTC timestamp in seconds since the Unix epoch',
                nullable: true
              },
              title: {
                type: 'string',
                description: 'Title of the event session',
                nullable: true
              },
              location_name: {
                type: 'string',
                description: 'Name of the location',
                nullable: true
              },
              location_data: {
                type: 'object',
                nullable: true,
                properties: {
                  components: { type: 'string', nullable: true },
                  coordinates: { type: 'string', nullable: true },
                  address_city: { type: 'string', nullable: true },
                  full_address: { type: 'string', nullable: true },
                  address_state: { type: 'string', nullable: true },
                  address_line_1: { type: 'string', nullable: true },
                  address_country: { type: 'string', nullable: true },
                  address_postal_code: { type: 'string', nullable: true }
                }
              },
              location_address: {
                type: 'string',
                description: 'Physical address of the event location',
                nullable: true
              },
              show_rsvp_bar: {
                type: 'boolean',
                description: 'Flag to show RSVP bar',
                nullable: true
              },
              show_title_in_form: {
                type: 'boolean',
                description: 'Flag to show title in the form',
                nullable: true
              }
            },
            required: %w[event_id start_time end_time]
          },
          EventRsvp: {
            type: 'object',
            properties: {
              event_id: {
                type: 'integer',
                format: 'int64',
                description: 'Identifier for the Mobilize event',
                nullable: false
              },
              event_session_id: {
                type: 'integer',
                format: 'int64',
                description: 'Identifier for the specific event session',
                nullable: false
              },
              user_id: {
                type: 'integer',
                format: 'int64',
                description: 'Identifier for the user RSVPing to the event',
                nullable: false
              },
              is_attending: {
                type: 'string',
                description: 'Indicates if the user is attending the event',
                nullable: false,
                enum: %w[yes no maybe]
              },
              is_confirmed: {
                type: 'boolean',
                description: 'Indicates if the RSVP is confirmed',
                nullable: false
              },
              agent_user_id: {
                type: 'integer',
                format: 'int64',
                description: 'Identifier for the agent user, if applicable',
                nullable: true
              },
              source: {
                type: 'string',
                description: 'Source of the RSVP',
                nullable: true
              },
              source_system: {
                type: 'string',
                description: 'System from which the RSVP originated',
                nullable: true
              }
            },
            required: %w[event_id event_session_id user_id]
          },
          EventAttendace: {
            type: 'object',
            properties: {
              event_id: {
                type: 'integer',
                format: 'int64',
                description: 'Identifier for the Mobilize event',
                nullable: false
              },
              event_session_id: {
                type: 'integer',
                format: 'int64',
                description: 'Identifier for the specific event session',
                nullable: false
              },
              user_id: {
                type: 'integer',
                format: 'int64',
                description: 'Identifier for the user attending to the event',
                nullable: false
              },
              attended: {
                type: 'boolean',
                description: 'Indicates if the user attended the event',
                nullable: false
              }
            },
            required: %w[event_id event_session_id user_id attended]
          },
          ScheduledTask: {
            type: 'object',
            properties: {
              due_at: {
                type: 'string',
                format: 'date-time',
                description: 'The date and time when the task is due',
                nullable: false
              },
              remind_at: {
                type: 'string',
                format: 'date-time',
                description: 'The date and time when a reminder for the task should be sent',
                nullable: true
              },
              agent_user_id: {
                type: 'integer',
                format: 'int64',
                description: 'Identifier for the agent user assigned to the task',
                nullable: true
              },
              user_id: {
                type: 'integer',
                format: 'int64',
                description: 'Identifier for the user who created the task',
                nullable: false
              },
              notes: {
                type: 'string',
                description: 'Additional notes or details about the task',
                nullable: true
              },
              task_type: {
                type: 'string',
                description: 'The type or category of the task',
                nullable: false
              },
              marked_as_completed: {
                type: 'boolean',
                description: 'Indicates if the task has been marked as completed',
                nullable: true
              }
            },
            required: %w[due_at user_id agent_user_id]
          },
          AgentAssignment: {
            type: :object,
            properties: {
              user_id: {
                type: :integer,
                format: 'int64',
                description: 'Identifier for the user',
                nullable: false
              },
              agent_user_id: {
                type: :integer,
                format: 'int64',
                description: 'Identifier for the agent user',
                nullable: true
              },
              is_active: {
                type: :boolean,
                description: 'Indicates if the assignment is currently active',
                nullable: true
              }
            },
            required: %w[user_id agent_user_id]
          },
          Phonebank: {
            type: :object,
            properties: {
              id: {
                type: :integer,
                format: 'int64',
                description: 'Unique identifier for the phonebank',
                nullable: false
              },
              title: {
                type: :string,
                description: 'Title of the phonebank',
                nullable: false
              },
              medium: {
                type: :string,
                description: 'Medium used for the phonebank',
                nullable: false
              },
              begins_at: {
                type: :string,
                format: 'date-time',
                description: 'Start time of the phonebank',
                nullable: false
              },
              ends_at: {
                type: :string,
                format: 'date-time',
                description: 'End time of the phonebank',
                nullable: true
              },
              targets: {
                type: :string,
                description: 'Targets for the phonebank',
                nullable: false
              },
              mobilize_event_id: {
                type: :integer,
                format: 'int64',
                description: 'Identifier for the associated mobilize event',
                nullable: true
              },
              created_at: {
                type: :string,
                format: 'date-time',
                description: 'Creation time of the phonebank record',
                nullable: false
              },
              target_parameters: {
                type: :object,
                description: 'Parameters for targeting in the phonebank',
                nullable: true,
                properties: {
                  rules: {
                    type: :array,
                    description: 'Rules for targeting',
                    nullable: false,
                    items: {
                      type: :object,
                      properties: {
                        id: { type: :string, description: 'Identifier for the rule', nullable: false },
                        type: { type: :string, description: 'Type of the value', nullable: false },
                        input: { type: :string, description: 'Type of input', nullable: false },
                        value: { type: :string, description: 'Value for the rule', nullable: false },
                        operator: { type: :string, description: 'Operator for the rule', nullable: false }
                      }
                    }
                  },
                  valid: { type: :boolean, description: 'Validity of the target parameters', nullable: false },
                  condition: { type: :string, description: 'Condition for combining rules', nullable: false }
                }
              },
              hours: {
                type: 'object',
                description: 'Hours allocated for the textbank',
                nullable: true,
                properties: {
                  end: { type: 'string', description: 'End time in HH:MM format', example: '20:00', nullable: false },
                  start: { type: 'string', description: 'Start time in HH:MM format', example: '10:00', nullable: false },
                  enabled: { type: 'boolean', description: 'Indicates if the hours are enabled', example: false, nullable: false },
                  timezone: { type: 'string', description: 'Timezone of the hours', example: 'America/Los_Angeles', nullable: false }
                }
              },
              assignment_strategy: {
                type: :string,
                description: 'Strategy for assigning calls in the phonebank',
                nullable: true
              },
              exclude_previously_rsvpd: {
                type: :boolean,
                description: 'Indicates if previously RSVP’d contacts are excluded',
                nullable: true
              },
              sort_order: {
                type: :string,
                description: 'Sort order for contacts in the phonebank',
                nullable: true
              },
              sort_order_custom_filter: {
                type: :object,
                description: 'Custom filter for sorting order',
                nullable: true
              },
              contact_strategy: {
                type: :string,
                description: 'Strategy for contacting in the phonebank',
                nullable: true
              },
              call_script: {
                type: :string,
                description: 'Script for calls in the phonebank',
                nullable: true
              },
              dialer_strategy: {
                type: :string,
                description: 'Dialer strategy used in the phonebank',
                nullable: true
              },
              voicemail: {
                type: :object,
                description: 'Voicemail settings for the phonebank',
                nullable: true
              },
              abandoned_calls: {
                type: :string,
                description: 'Policy for abandoned calls in the phonebank',
                nullable: true
              },
              acceptable_abandon_rate: {
                type: :number,
                format: 'float',
                description: 'Acceptable rate of abandoned calls in the phonebank',
                nullable: true
              },
              sms_automation: {
                type: :object,
                description: 'SMS automation settings for the phonebank',
                nullable: true
              },
              minimum_callers_for_predictive_dialing: {
                type: :integer,
                format: 'int64',
                description: 'Minimum number of callers for predictive dialing to be enabled',
                nullable: true
              }
            }
          },
          Textbank: {
            type: 'object',
            properties: {
              id: {
                type: 'integer',
                format: 'int64',
                description: 'Unique identifier for the textbank',
                nullable: false
              },
              title: {
                type: 'string',
                description: 'Title of the textbank',
                nullable: false
              },
              medium: {
                type: 'string',
                description: 'Medium used for the textbank',
                nullable: false
              },
              begins_at: {
                type: 'string',
                format: 'date-time',
                description: 'Start time of the textbank',
                nullable: false
              },
              ends_at: {
                type: 'string',
                format: 'date-time',
                description: 'End time of the textbank',
                nullable: true
              },
              targets: {
                type: 'string',
                description: 'Targets for the textbank',
                nullable: false
              },
              mobilize_event_id: {
                type: 'integer',
                format: 'int64',
                description: 'Identifier for the associated mobilize event',
                nullable: true
              },
              created_at: {
                type: 'string',
                format: 'date-time',
                description: 'Creation time of the textbank record',
                nullable: false
              },
              sms_starting_script: {
                type: 'object',
                description: 'Starting script for SMS in the textbank, localized by language',
                nullable: true,
                properties: {
                  en: { type: 'string', description: 'English version of the starting SMS script applies for multiple languages', example: "Hi, {{ user.first-name }}, what's going on?", nullable: false }
                }
              },
              sms_attachments: {
                type: 'object',
                description: 'Attachments for SMS in the textbank, localized by language',
                nullable: true,
                properties: {
                  en: {
                    type: 'array',
                    description: 'English version of the SMS attachments',
                    items: {
                      type: 'string',
                      format: 'uri',
                      description: 'URL of the attachment'
                    },
                    nullable: false
                  }
                }
              },
              target_parameters: {
                type: :object,
                description: 'Parameters for targeting in the phonebank',
                nullable: true,
                properties: {
                  rules: {
                    type: :array,
                    description: 'Rules for targeting',
                    nullable: false,
                    items: {
                      type: :object,
                      properties: {
                        id: { type: :string, description: 'Identifier for the rule', nullable: false },
                        type: { type: :string, description: 'Type of the value', nullable: false },
                        input: { type: :string, description: 'Type of input', nullable: false },
                        value: { type: :string, description: 'Value for the rule', nullable: false },
                        operator: { type: :string, description: 'Operator for the rule', nullable: false }
                      }
                    }
                  },
                  valid: { type: :boolean, description: 'Validity of the target parameters', nullable: false },
                  condition: { type: :string, description: 'Condition for combining rules', nullable: false }
                }
              },
              hours: {
                type: 'object',
                description: 'Hours allocated for the textbank',
                nullable: true,
                properties: {
                  end: { type: 'string', description: 'End time in HH:MM format', example: '20:00', nullable: false },
                  start: { type: 'string', description: 'Start time in HH:MM format', example: '10:00', nullable: false },
                  enabled: { type: 'boolean', description: 'Indicates if the hours are enabled', example: false, nullable: false },
                  timezone: { type: 'string', description: 'Timezone of the hours', example: 'America/Los_Angeles', nullable: false }
                }
              },
              assignment_strategy: {
                type: 'string',
                description: 'Strategy for assigning texts in the textbank',
                nullable: true
              },
              exclude_previously_rsvpd: {
                type: 'boolean',
                description: 'Indicates if previously RSVP’d contacts are excluded',
                nullable: true
              },
              sort_order: {
                type: 'string',
                description: 'Sort order for contacts in the textbank',
                nullable: true
              },
              sort_order_custom_filter: {
                type: 'object',
                description: 'Custom filter for sorting order',
                nullable: true
              },
              contact_strategy: {
                type: 'string',
                description: 'Strategy for contacting in the textbank',
                nullable: true
              }
            }
          },
          EmailBlast: {
            type: :object,
            properties: {
              id: {
                type: :integer,
                format: 'int64',
                description: 'Unique identifier for the Email Blast',
                nullable: false
              },
              name: {
                type: :string,
                description: 'Name of the Email Blast',
                nullable: false
              },
              target_parameters: {
                type: :object,
                properties: {
                  rules: {
                    type: :array,
                    items: {
                      type: :object,
                      properties: {
                        id: { type: :string, nullable: false },
                        type: { type: :string, nullable: false },
                        field: { type: :string, nullable: false },
                        input: { type: :string, nullable: false },
                        value: {
                          type: :array,
                          items: { type: :string },
                          nullable: false
                        },
                        operator: { type: :string, nullable: false }
                      }
                    },
                    nullable: false
                  },
                  valid: { type: :boolean, nullable: false },
                  condition: { type: :string, nullable: false }
                },
                nullable: false
              },
              subject: {
                type: :object,
                properties: {
                  en: { type: :string, nullable: false }
                },
                nullable: false
              },
              content: { type: :object, nullable: false },
              attachments: { type: :object, nullable: false },
              from: { type: :string, nullable: false },
              email_sender_id: { type: :integer, format: 'int64', nullable: true },
              reply_to: { type: :string, nullable: true },
              email_wrapper_id: { type: :integer, format: 'int64', nullable: true },
              supported_languages: {
                type: :array,
                items: { type: :string },
                nullable: false
              },
              track_opens: { type: :boolean, nullable: false },
              track_clicks: { type: :boolean, nullable: false },
              limit_sends: { type: :integer, format: 'int64', nullable: true },
              is_valid: { type: :boolean, nullable: false },
              scheduled_to_send_at: { type: :string, format: 'date-time', nullable: true },
              is_send_in_progress: { type: :boolean, nullable: true },
              finished_delivering_at: { type: :string, format: 'date-time', nullable: true },
              target_count_at_send_time: { type: :integer, format: 'int64', nullable: true },
              created_at: { type: :string, format: 'date-time', nullable: false },
              results: {
                type: :object,
                properties: {
                  sent: { type: :integer, nullable: false },
                  delivererd: { type: :integer, nullable: false },
                  unsubscribed: { type: :integer, nullable: false },
                  bounced: { type: :integer, nullable: false },
                  complained: { type: :integer, nullable: false },
                  opened: { type: :integer, nullable: false },
                  clicked: { type: :integer, nullable: false }
                },
                nullable: false
              }
            }
          },
          TextBlast: {
            type: :object,
            properties: {
              id: {
                type: :integer,
                format: 'int64',
                description: 'Unique identifier for the Text Blast',
                nullable: false
              },
              name: {
                type: :string,
                description: 'Name of the Text Blast',
                nullable: false
              },
              target_parameters: {
                type: :object,
                properties: {
                  rules: {
                    type: :array,
                    items: {
                      type: :object,
                      properties: {
                        id: { type: :string, nullable: false },
                        type: { type: :string, nullable: false },
                        field: { type: :string, nullable: false },
                        input: { type: :string, nullable: false },
                        value: { type: :string, nullable: false },
                        operator: { type: :string, nullable: false }
                      }
                    },
                    nullable: false
                  },
                  valid: { type: :boolean, nullable: false },
                  condition: { type: :string, nullable: false }
                },
                nullable: false
              },
              content: {
                type: :object,
                properties: {
                  en: { type: :string, nullable: false }
                },
                nullable: false
              },
              attachments: { type: :object, nullable: false },
              supported_languages: {
                type: :array,
                items: { type: :string },
                nullable: false
              },
              track_clicks: { type: :boolean, nullable: false },
              limit_sends: { type: :integer, format: 'int64', nullable: true },
              is_valid: { type: :boolean, nullable: false },
              scheduled_to_send_at: { type: :string, format: 'date-time', nullable: true },
              is_send_in_progress: { type: :boolean, nullable: false },
              finished_delivering_at: { type: :string, format: 'date-time', nullable: true },
              target_count_at_send_time: { type: :integer, format: 'int64', nullable: false },
              created_at: { type: :string, format: 'date-time', nullable: false },
              results: {
                type: :object,
                properties: {
                  sent: { type: :integer, nullable: false },
                  delivery_issue: { type: :integer, nullable: false },
                  clicked: { type: :integer, nullable: false }
                },
                nullable: false
              }
            }
          },
          ScheduledCall: {
            type: 'object',
            properties: {
              user_id: {
                type: 'integer',
                format: 'int64',
                description: 'Identifier for the user associated with the scheduled call',
                nullable: false
              },
              agent_user_id: {
                type: 'integer',
                format: 'int64',
                description: 'Identifier for the agent user associated with the scheduled call',
                nullable: true
              },
              call_time: {
                type: 'string',
                format: 'date-time',
                description: 'The scheduled time for the call',
                nullable: false
              },
              language: {
                type: 'string',
                description: 'The language preference for the scheduled call',
                nullable: true
              },
              page_id: {
                type: 'integer',
                format: 'int64',
                description: 'Identifier for the action page associated with the scheduled call',
                nullable: false
              },
              created_at: {
                type: 'string',
                format: 'date-time',
                description: 'The creation time of the scheduled call record',
                nullable: false
              },
              agent_user_call_id: {
                type: 'integer',
                format: 'int64',
                description: 'Unique identifier for the call made by the agent user',
                nullable: true
              }
            },
            required: %w[user_id call_time page_id created_at]
          },
          Page: {
            type: 'object',
            properties: {
              id: {
                type: 'integer',
                format: 'int64',
                description: 'Unique identifier for the Page',
                nullable: false
              },
              type: {
                type: 'string',
                description: 'Type of the action page',
                nullable: false
              },
              url_slug: {
                type: 'string',
                description: 'URL slug for the Page',
                nullable: false
              },
              name: {
                type: 'string',
                description: 'Name of the Page',
                nullable: false
              },
              website_id: {
                type: 'integer',
                format: 'int64',
                description: 'Identifier for the website associated with the Page',
                nullable: false
              },
              is_published: {
                type: 'boolean',
                description: 'Indicates if the Page is published',
                nullable: false
              },
              full_url: {
                type: 'string',
                format: 'uri',
                description: 'Full URL of the Page',
                nullable: false
              },
              scope_id: {
                type: 'integer',
                format: 'int64',
                description: 'Scope identifier for the Page',
                nullable: false
              },
              scope_type: {
                type: 'string',
                description: 'Scope type of the Page',
                nullable: false
              },
              supported_languages: {
                type: 'array',
                items: {
                  type: 'string'
                },
                description: 'Supported languages for the Page',
                nullable: false
              },
              follow_up: {
                type: 'object',
                description: 'Follow up configuration for the Page',
                nullable: true
              },
              confirmations: {
                type: 'object',
                description: 'Confirmation settings for the Page',
                nullable: true
              },
              admin_notifications: {
                type: 'object',
                description: 'Admin notification settings for the Page',
                nullable: true
              },
              requires_user: {
                type: 'boolean',
                description: 'Indicates if the Page requires a user',
                nullable: false
              },
              always_hide_primary_nav: {
                type: 'boolean',
                description: 'Indicates if the primary navigation should always be hidden for the Page',
                nullable: false
              },
              always_hide_footer: {
                type: 'boolean',
                description: 'Indicates if the footer should always be hidden for the Page',
                nullable: false
              },
              allow_multiple_responses: {
                type: 'boolean',
                description: 'Indicates if the Page allows multiple responses',
                nullable: false
              },
              created_at: {
                type: 'string',
                format: 'date-time',
                description: 'Creation time of the Page',
                nullable: false
              },
              form: {
                type: 'array',
                description: 'Form configuration for the Page',
                items: {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      description: 'Name of the form field',
                      nullable: false
                    },
                    show: {
                      type: 'string',
                      description: 'Visibility requirement of the form field',
                      enum: ['required', 'optional', 'always_required'],
                      nullable: false
                    },
                    type: {
                      type: 'string',
                      description: 'Type of the form field',
                      enum: ['input', 'select', 'checkbox', 'radio', 'textarea', 'file'],
                      nullable: false
                    },
                    label: {
                      type: 'object',
                      description: 'Label for the form field, supporting multiple languages',
                      properties: {
                        en: { type: 'string', description: 'English label' },
                        es: { type: 'string', description: 'Spanish label' }
                      },
                      nullable: false
                    },
                    input_template: {
                      type: 'string',
                      description: 'Template type for the input field',
                      nullable: false
                    },
                    opt_in_language: {
                      type: 'string',
                      description: 'Language used for opt-in confirmation',
                      nullable: true
                    },
                    requires_opt_in: {
                      type: 'boolean',
                      description: 'Indicates if opt-in is required',
                      nullable: false
                    },
                    phone_number_origin: {
                      type: 'string',
                      description: 'Origin of the phone number',
                      enum: ['home_country', 'current_location'],
                      nullable: false
                    },
                    validates_if_textable: {
                      type: 'boolean',
                      description: 'Indicates if the phone number should be validated for textability',
                      nullable: false
                    },
                    desktop_label_column_width: {
                      type: 'integer',
                      format: 'int32',
                      description: 'Width of the label column on desktop devices',
                      nullable: false
                    }
                  }
                },
                nullable: true
              }
            }
          },
          UserList: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                description: 'Name of the UserList',
                nullable: false
              },
              parameters: {
                type: 'object',
                additionalProperties: true,
                description: 'JSONB parameters associated with the UserList',
                nullable: false
              },
              user_id: {
                type: 'integer',
                format: 'int64',
                description: 'Identifier for the user associated with the UserList',
                nullable: false
              },
              scope_id: {
                type: 'integer',
                format: 'int64',
                description: 'Identifier for the scope associated with the UserList',
                nullable: false
              },
              scope_type: {
                type: 'string',
                description: 'Type of scope associated with the UserList',
                nullable: false
              },
              created_at: {
                type: 'string',
                format: 'date-time',
                description: 'The date and time when the UserList was created',
                nullable: false
              }
            }
          },
          ChapterPhoneNumber: {
            type: 'object',
            properties: {
              phone_number: {
                type: 'string',
                description: 'Phone number associated with the chapter',
                nullable: false
              },
              assigned_user_count: {
                type: 'integer',
                format: 'int64',
                description: 'Count of users assigned to this phone number',
                nullable: false
              },
              chapters: {
                type: 'array',
                description: 'Chapters associated with this phone number',
                items: {
                  '$ref': '#/components/schemas/Chapter'
                },
                nullable: false
              },
              created_at: {
                type: 'string',
                format: 'date-time',
                description: 'The date and time when the ChapterPhoneNumber was created',
                nullable: false
              }
            }
          },
          Organization: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                description: 'Name of the organization',
                nullable: false
              },
              image_url: {
                type: 'string',
                description: 'URL of the organization\'s image',
                nullable: true
              },
              parent_organization_id: {
                type: 'integer',
                format: 'int64',
                description: 'ID of the parent organization, if any',
                nullable: true
              },
              default_language: {
                type: 'string',
                description: 'Default language of the organization',
                nullable: false
              },
              supported_languages: {
                type: 'array',
                items: {
                  type: 'string'
                },
                description: 'List of languages supported by the organization',
                nullable: false
              }
            }
          },
          TextTemplate: {
            type: 'object',
            properties: {
              id: {
                type: 'integer',
                format: 'int64',
                description: 'Unique identifier for the TextTemplate',
                nullable: false
              },
              name: {
                type: 'string',
                description: 'Name of the TextTemplate',
                nullable: false
              },
              scope_id: {
                type: 'integer',
                format: 'int64',
                description: 'Identifier for the scope associated with the TextTemplate',
                nullable: false
              },
              scope_type: {
                type: 'string',
                description: 'Type of scope associated with the TextTemplate',
                nullable: false
              },
              template: {
                type: 'object',
                description: 'Template content in various languages, where keys are 2-character language codes and values are the corresponding messages.',
                additionalProperties: {
                  type: 'string'
                },
                nullable: false
              },
              event_id: {
                type: 'integer',
                format: 'int64',
                description: 'Identifier for the event associated with the TextTemplate, if applicable',
                nullable: true
              },
              created_at: {
                type: 'string',
                format: 'date-time',
                description: 'The date and time when the TextTemplate was created',
                nullable: false
              }
            },
            required: %w[name scope_id scope_type]
          },
          TeamMember: {
            type: 'object',
            properties: {
              id: {
                type: 'integer',
                format: 'int64',
                description: 'Unique identifier for the TeamMember',
                nullable: false
              },
              user_id: {
                type: 'integer',
                format: 'int64',
                description: 'Identifier for the user associated with the TeamMember',
                nullable: false
              },
              scope_id: {
                type: 'integer',
                format: 'int64',
                description: 'Identifier for the scope associated with the TeamMember',
                nullable: false
              },
              scope_type: {
                type: 'string',
                description: 'Type of scope associated with the TeamMember',
                nullable: false
              },
              logged_in_as_id: {
                type: 'integer',
                format: 'int64',
                description: 'Identifier for the entity the TeamMember is logged in as',
                nullable: true
              },
              logged_in_as_type: {
                type: 'string',
                description: 'Type of entity the TeamMember is logged in as',
                nullable: true
              },
              last_app_activity_at: {
                type: 'string',
                format: 'date-time',
                description: 'The date and time of the last app activity by the TeamMember',
                nullable: true
              },
              created_at: {
                type: 'string',
                format: 'date-time',
                description: 'The date and time when the TeamMember was created',
                nullable: false
              }
            },
          },
          TaskAgent: {
            type: 'object',
            properties: {
              id: {
                type: 'integer',
                format: 'int64',
                description: 'Unique identifier for the TaskAgent',
                nullable: false
              },
              user_id: {
                type: 'integer',
                format: 'int64',
                description: 'Identifier for the user associated with the TaskAgent',
                nullable: false
              },
              task_id: {
                type: 'integer',
                format: 'int64',
                description: 'Identifier for the task associated with the TaskAgent',
                nullable: false
              },
              created_at: {
                type: 'string',
                format: 'date-time',
                description: 'The date and time when the TaskAgent was created',
                nullable: false
              }
            },
          },
          TaskAssignment: {
            type: 'object',
            properties: {
              id: {
                type: 'integer',
                format: 'int64',
                description: 'Unique identifier for the TaskAssignment',
                nullable: false
              },
              user_id: {
                type: 'integer',
                format: 'int64',
                description: 'Identifier for the user associated with the TaskAssignment',
                nullable: false
              },
              task_id: {
                type: 'integer',
                format: 'int64',
                description: 'Identifier for the task associated with the TaskAssignment',
                nullable: false
              },
              agent_user_id: {
                type: 'integer',
                format: 'int64',
                description: 'Identifier for the agent user associated with the TaskAssignment',
                nullable: false
              },
              created_at: {
                type: 'string',
                format: 'date-time',
                description: 'The date and time when the TaskAssignment was created',
                nullable: false
              }
            },
          }

        }
      }
    }
  }

  # Specify the format of the output Swagger file when running 'rswag:specs:swaggerize'.
  # The openapi_specs configuration option has the filename including format in
  # the key, this may want to be changed to avoid putting yaml in json files.
  # Defaults to json. Accepts ':json' and ':yaml'.
  config.openapi_format = :yaml
end
