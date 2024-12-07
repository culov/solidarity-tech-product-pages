# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_07_09_175810) do
  create_schema "readonly_schema_uaw"

  # These are extensions that must be enabled in order to support this database
  enable_extension "hstore"
  enable_extension "pg_stat_statements"
  enable_extension "plpgsql"
  enable_extension "postgis"
  enable_extension "postgis_raster"

  create_table "account_types", force: :cascade do |t|
    t.string "name"
    t.string "key"
    t.integer "user_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "organization_id"
    t.boolean "default"
  end

  create_table "action_pages", force: :cascade do |t|
    t.string "url_slug"
    t.string "type"
    t.text "note"
    t.boolean "published"
    t.boolean "can_unpublish"
    t.integer "form_id"
    t.integer "chapter_id"
    t.text "image_url"
    t.jsonb "sharing", default: {}
    t.jsonb "translations", default: {}
    t.jsonb "custom_page_values", default: {}
    t.jsonb "confirmations", default: {}
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "template"
    t.jsonb "follow_up", default: {}
    t.boolean "allow_multiple_responses", default: true
    t.string "recognize_user", default: "once", null: false
    t.boolean "requires_user", default: false
    t.integer "scope_id"
    t.string "scope_type"
    t.integer "website_id"
    t.string "supported_languages", default: ["en"], array: true
    t.string "name"
    t.boolean "always_hide_primary_nav", default: false
    t.boolean "always_hide_footer", default: false
    t.jsonb "admin_notifications", default: {}, null: false
    t.index ["scope_id", "scope_type"], name: "index_action_pages_on_scope_id_and_scope_type"
    t.index ["url_slug"], name: "index_action_pages_on_url_slug"
    t.index ["website_id"], name: "index_action_pages_on_website_id"
  end

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", precision: nil, null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", precision: nil, null: false
    t.string "service_name", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "activities", force: :cascade do |t|
    t.integer "user_id"
    t.string "name"
    t.integer "assisted_by_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "actionable_id"
    t.string "actionable_type"
    t.boolean "admin", default: false
    t.index ["actionable_id", "actionable_type"], name: "index_activities_on_actionable_id_and_actionable_type"
    t.index ["created_at"], name: "index_activities_on_created_at"
    t.index ["user_id", "created_at"], name: "index_activities_on_user_id_and_created_at"
    t.index ["user_id"], name: "index_activities_on_user_id"
  end

  create_table "activity_overview_reports", force: :cascade do |t|
    t.string "name"
    t.integer "scope_id"
    t.string "scope_type"
    t.string "fields", default: [], array: true
    t.integer "user_id"
    t.boolean "personal"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "agent_event_assignments", force: :cascade do |t|
    t.integer "user_id"
    t.integer "mobilize_event_id"
    t.integer "assigned_by"
    t.integer "chapter_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.boolean "has_contacted"
  end

  create_table "agent_user_assignments", force: :cascade do |t|
    t.integer "agent_user_id"
    t.integer "chatbot_id"
    t.integer "user_id"
    t.integer "chapter_phone_number_id"
    t.boolean "has_contacted"
    t.integer "chapter_id"
    t.integer "mobilize_event_rsvp_id"
    t.boolean "user_opted_out"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "mobilize_event_id"
    t.integer "deactivated_by_id"
    t.boolean "is_active"
    t.index ["agent_user_id"], name: "index_agent_user_assignments_on_agent_user_id"
    t.index ["is_active"], name: "index_agent_user_assignments_on_is_active"
    t.index ["user_id"], name: "index_agent_user_assignments_on_user_id"
  end

  create_table "agent_user_calls", force: :cascade do |t|
    t.text "notes"
    t.integer "agent_id"
    t.integer "user_id"
    t.integer "agent_user_assignment_id"
    t.datetime "call_ended_at", precision: nil
    t.text "recording_url"
    t.string "hash_id"
    t.integer "chapter_id"
    t.string "twilio_call_sid"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.datetime "call_started_at", precision: nil
    t.boolean "unanswered"
    t.boolean "left_voicemail", default: false
    t.integer "scheduled_call_id"
    t.boolean "bad_phone_number"
    t.string "from_number"
    t.string "to_number"
    t.integer "user_phone_number_id"
    t.string "direction"
    t.integer "caller_session_id"
    t.integer "predictive_dialer_session_id"
    t.string "status"
    t.integer "call_transcription_id"
    t.index ["agent_id"], name: "index_agent_user_calls_on_agent_id"
    t.index ["call_started_at"], name: "index_agent_user_calls_on_call_started_at"
    t.index ["call_transcription_id"], name: "index_agent_user_calls_on_call_transcription_id"
    t.index ["predictive_dialer_session_id", "status"], name: "index_agent_user_calls_on_pds_and_status"
    t.index ["predictive_dialer_session_id"], name: "index_agent_user_calls_on_predictive_dialer_session_id"
    t.index ["twilio_call_sid"], name: "index_agent_user_calls_on_twilio_call_sid"
    t.index ["unanswered"], name: "index_agent_user_calls_on_unanswered"
    t.index ["user_id"], name: "index_agent_user_calls_on_user_id"
  end

  create_table "ahoy_events", force: :cascade do |t|
    t.integer "visit_id"
    t.integer "user_id"
    t.string "name"
    t.jsonb "properties"
    t.datetime "time", precision: nil
    t.index ["name", "time"], name: "index_ahoy_events_on_name_and_time"
    t.index ["properties"], name: "index_ahoy_events_on_properties", using: :gin
    t.index ["user_id", "name"], name: "index_ahoy_events_on_user_id_and_name"
    t.index ["visit_id", "name"], name: "index_ahoy_events_on_visit_id_and_name"
  end

  create_table "ahoy_messages", force: :cascade do |t|
    t.string "token"
    t.text "to"
    t.integer "user_id"
    t.string "user_type"
    t.string "mailer"
    t.text "subject"
    t.datetime "sent_at", precision: nil
    t.datetime "opened_at", precision: nil
    t.datetime "clicked_at", precision: nil
    t.boolean "did_bounce"
    t.integer "email_message_id"
    t.boolean "user_marked_as_spam"
    t.integer "mobilize_event_rsvp_id"
    t.integer "email_action_id"
    t.integer "action_page_id"
    t.integer "user_action_id"
    t.string "message_id"
    t.datetime "delivered_at", precision: nil
    t.integer "donation_charge_id"
    t.index ["email_message_id"], name: "index_ahoy_messages_on_email_message_id"
    t.index ["message_id"], name: "index_ahoy_messages_on_message_id"
    t.index ["sent_at"], name: "index_ahoy_messages_on_sent_at"
    t.index ["token"], name: "index_ahoy_messages_on_token"
    t.index ["user_id", "sent_at"], name: "index_ahoy_messages_on_user_id_and_sent_at"
    t.index ["user_id", "user_type"], name: "index_ahoy_messages_on_user_id_and_user_type"
    t.index ["user_id"], name: "index_ahoy_messages_on_user_id"
  end

  create_table "automation_enrollments", force: :cascade do |t|
    t.bigint "automation_id", null: false
    t.bigint "user_id", null: false
    t.bigint "current_step_id"
    t.boolean "active", default: true
    t.boolean "completed_goal", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["automation_id"], name: "index_automation_enrollments_on_automation_id"
    t.index ["current_step_id"], name: "index_automation_enrollments_on_current_step_id"
    t.index ["user_id"], name: "index_automation_enrollments_on_user_id"
  end

  create_table "automation_executions", force: :cascade do |t|
    t.string "resource_type", null: false
    t.bigint "resource_id", null: false
    t.bigint "user_id", null: false
    t.bigint "automation_enrollment_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["automation_enrollment_id"], name: "index_automation_executions_on_automation_enrollment_id"
    t.index ["resource_type", "resource_id"], name: "index_automation_executions_on_resource"
    t.index ["user_id"], name: "index_automation_executions_on_user_id"
  end

  create_table "automation_steps", force: :cascade do |t|
    t.bigint "automation_id", null: false
    t.bigint "parent_id"
    t.integer "position"
    t.string "type", null: false
    t.jsonb "data", default: {}
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["automation_id"], name: "index_automation_steps_on_automation_id"
    t.index ["parent_id"], name: "index_automation_steps_on_parent_id"
  end

  create_table "automations", force: :cascade do |t|
    t.string "name"
    t.integer "scope_id"
    t.string "scope_type"
    t.boolean "is_active", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.jsonb "communication_settings", default: {}
    t.jsonb "goals", default: {}
    t.jsonb "trigger_conditions", default: {}
    t.string "supported_languages", default: ["en"], array: true
    t.index ["goals"], name: "index_automations_on_goals", using: :gin
    t.index ["scope_id", "scope_type"], name: "index_automations_on_scope_id_and_scope_type"
    t.index ["trigger_conditions"], name: "index_automations_on_trigger_conditions", using: :gin
  end

  create_table "billing_plan_changes", force: :cascade do |t|
    t.integer "billing_plan_id"
    t.integer "max_contacts"
    t.integer "user_id"
    t.integer "organization_billing_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "billing_plans", force: :cascade do |t|
    t.string "name"
    t.string "features", array: true
    t.jsonb "limits", default: {}
    t.jsonb "contacts_pricing", default: {}
    t.jsonb "usage_pricing", default: {}
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "blog_posts", force: :cascade do |t|
    t.integer "chapter_id"
    t.integer "user_id"
    t.text "content"
    t.string "title"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "url"
  end

  create_table "branches", force: :cascade do |t|
    t.integer "chapter_id"
    t.string "color"
    t.string "name"
    t.geography "bounds", limit: {:srid=>4326, :type=>"st_polygon", :geographic=>true}
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.geography "center", limit: {:srid=>4326, :type=>"st_point", :geographic=>true}
  end

  create_table "brand_registrations", force: :cascade do |t|
    t.integer "root_organization_id"
    t.string "provider"
    t.string "registration_type"
    t.string "name"
    t.string "email"
    t.string "customer_profile_sid"
    t.jsonb "customer_profile_business_information"
    t.jsonb "authorized_representative_1"
    t.string "address_sid"
    t.string "customer_document_sid"
    t.string "authorized_representative_1_sid"
    t.string "customer_profile_business_information_sid"
    t.string "a2p_trust_bundle_sid"
    t.string "a2p_end_user_sid"
    t.string "brand_registration_sid"
    t.string "brand_registration_status"
    t.string "messaging_service_sid"
    t.string "campaign_use_case_sid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.jsonb "customer_profile_business_address"
    t.string "otp_identity_status"
    t.string "campaign_use_case_status"
    t.string "shaken_stir_product_sid"
    t.string "voice_integrity_product_sid"
    t.index ["root_organization_id"], name: "index_brand_registrations_on_root_organization_id"
  end

  create_table "branded_calling_registrations", force: :cascade do |t|
    t.integer "root_organization_id"
    t.string "branded_calling_trust_product_sid"
    t.string "branded_calling_end_user_sid"
    t.string "display_name"
    t.string "long_display_name"
    t.string "status"
    t.integer "user_id"
    t.integer "brand_registration_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "call_action_connections", force: :cascade do |t|
    t.string "from"
    t.string "to"
    t.integer "legislative_district_id"
    t.integer "user_id"
    t.integer "call_action_id"
    t.string "zip_code"
    t.string "twilio_call_sid"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "call_chain", default: [], array: true
    t.string "twilio_parent_call_sid"
    t.integer "call_duration"
    t.string "twilio_call_direction"
  end

  create_table "call_actions", force: :cascade do |t|
    t.string "title"
    t.integer "legislature_ids", default: [], array: true
    t.integer "chapter_phone_number_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "chapter_id"
    t.string "text_follow_up"
    t.string "url"
    t.text "content"
    t.text "follow_up_script_content"
    t.string "image_url"
    t.text "follow_up_call_script"
    t.integer "introduction_recording_upload_file_id"
    t.integer "secondary_recording_upload_file_id"
    t.integer "zip_code_recording_upload_file_id"
    t.integer "action_page_id"
    t.integer "legislator_ids", default: [], array: true
  end

  create_table "call_transcriptions", force: :cascade do |t|
    t.json "data"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "feedback"
    t.text "summary"
    t.integer "rating"
    t.string "sentiment"
    t.string "engagement_analysis"
    t.string "engagement_analysis_justification"
    t.index ["sentiment"], name: "index_call_transcriptions_on_sentiment"
  end

  create_table "caller_sessions", force: :cascade do |t|
    t.integer "predictive_dialer_session_id"
    t.integer "user_id"
    t.string "user_phone_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "call_sid"
    t.boolean "available", default: false
    t.datetime "ended_at", precision: nil
    t.string "conference_sid"
    t.integer "total_wrap_up_time_in_seconds", default: 0
    t.integer "total_wrapped_up_calls", default: 0
    t.index ["predictive_dialer_session_id"], name: "index_caller_sessions_on_predictive_dialer_session_id"
    t.index ["user_id"], name: "index_caller_sessions_on_user_id"
  end

  create_table "chapter_phone_numbers", force: :cascade do |t|
    t.string "number_type"
    t.integer "chapter_id"
    t.string "phone_number"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "assigned_user_count", default: 0
    t.string "hash_id"
    t.integer "organization_id"
    t.integer "phone_number_block_id"
    t.boolean "stop_assignments", default: false
    t.string "phone_number_sid"
    t.index ["chapter_id"], name: "index_chapter_phone_numbers_on_chapter_id"
    t.index ["organization_id"], name: "index_chapter_phone_numbers_on_organization_id"
  end

  create_table "chapter_poll_votes", force: :cascade do |t|
    t.integer "chapter_poll_id"
    t.string "chapter_id"
    t.string "user_id"
    t.string "choice"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "chapter_polls", force: :cascade do |t|
    t.integer "chapter_id"
    t.string "title"
    t.string "question"
    t.string "choice_a"
    t.string "choice_b"
    t.string "choice_c"
    t.string "choice_d"
    t.string "choice_e"
    t.text "follow_up_response"
    t.integer "chatbot_id"
    t.string "delivery_method"
    t.integer "user_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.text "message_to_send"
    t.boolean "has_been_sent"
    t.string "hash_id"
  end

  create_table "chapter_voicemails", force: :cascade do |t|
    t.integer "chapter_id"
    t.float "duration"
    t.string "recording_url"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.boolean "deleted"
    t.string "caller_phone_number"
    t.integer "user_id"
    t.integer "agent_user_call_id"
    t.text "transcription"
  end

  create_table "chapters", force: :cascade do |t|
    t.string "city"
    t.string "city_url"
    t.string "founder_id"
    t.string "phone_number"
    t.string "country"
    t.string "currency"
    t.string "default_dues"
    t.string "language"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "chatbot_id"
    t.string "facebook_url"
    t.string "twitter_url"
    t.string "website_url"
    t.string "join_keyword", default: "JOIN"
    t.text "description"
    t.string "timezone"
    t.geography "lonlat", limit: {:srid=>4326, :type=>"st_point", :geographic=>true}
    t.boolean "is_active"
    t.integer "chapter_phone_number_id"
    t.boolean "accepting_scheduled_calls"
    t.text "slack_legacy_token"
    t.string "slack_channels"
    t.string "slack_team_id"
    t.string "logo_url"
    t.string "name"
    t.string "navbar_name"
    t.string "instagram_url"
    t.string "small_logo_url"
    t.integer "small_logo_image_upload_id"
    t.jsonb "automated_messages"
    t.string "default_area_code"
    t.jsonb "options", default: {}
    t.string "default_email_reply_to"
    t.string "default_language", default: "en"
    t.string "supported_languages", default: ["en"], array: true
    t.integer "organization_id"
    t.integer "managed_by_organization_id"
    t.integer "cnam_registration_id"
    t.index ["chatbot_id"], name: "index_chapters_on_chatbot_id"
  end

  create_table "cnam_registrations", force: :cascade do |t|
    t.integer "root_organization_id"
    t.string "cnam_trust_product_sid"
    t.string "cnam_end_user_sid"
    t.string "display_name"
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.integer "brand_registration_id"
  end

  create_table "conversation_follow_ups", force: :cascade do |t|
    t.integer "agent_id"
    t.integer "conversation_id"
    t.integer "user_id"
    t.boolean "cleared"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "conversations", force: :cascade do |t|
    t.integer "initiator_id"
    t.integer "recipient_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "hash_id"
    t.integer "last_message_id"
    t.integer "chapter_id"
    t.integer "user_id"
    t.string "user_phone_number"
    t.index ["chapter_id"], name: "index_conversations_on_chapter_id"
    t.index ["hash_id"], name: "index_conversations_on_hash_id"
    t.index ["initiator_id"], name: "index_conversations_on_initiator_id"
    t.index ["last_message_id"], name: "index_conversations_on_last_message_id"
    t.index ["recipient_id"], name: "index_conversations_on_recipient_id"
    t.index ["user_id"], name: "index_conversations_on_user_id"
  end

  create_table "counties", force: :cascade do |t|
    t.integer "state_id"
    t.string "abbr"
    t.string "name"
    t.string "county_seat"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["name"], name: "index_counties_on_name"
    t.index ["state_id"], name: "index_counties_on_state_id"
  end

  create_table "custom_user_properties", force: :cascade do |t|
    t.integer "chapter_id"
    t.integer "user_id"
    t.text "description"
    t.string "field_type"
    t.string "label"
    t.string "internal_name"
    t.jsonb "options"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "organization_id"
    t.integer "position"
    t.integer "scope_id"
    t.string "scope_type"
  end

  create_table "data_exports", force: :cascade do |t|
    t.integer "user_id"
    t.string "hash_id"
    t.jsonb "target_parameters"
    t.string "scope_type"
    t.integer "scope_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "export_type"
  end

  create_table "data_imports", force: :cascade do |t|
    t.integer "user_id"
    t.jsonb "mapping", default: {}
    t.jsonb "options", default: {}
    t.string "scope_type"
    t.integer "scope_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.jsonb "results", default: {}
  end

  create_table "demand_categories", force: :cascade do |t|
    t.string "title"
    t.string "cover_image_url"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "demand_votes", force: :cascade do |t|
    t.float "value"
    t.integer "user_id"
    t.integer "demand_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["demand_id"], name: "index_demand_votes_on_demand_id"
    t.index ["user_id"], name: "index_demand_votes_on_user_id"
  end

  create_table "demand_votes_sorts", force: :cascade do |t|
    t.integer "user_id"
    t.integer "demand_id_sort_order", default: [], array: true
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "original_demand_id_sort_order", default: [], array: true
    t.integer "action_page_id"
    t.index ["user_id"], name: "index_demand_votes_sorts_on_user_id"
  end

  create_table "demands", force: :cascade do |t|
    t.string "title"
    t.integer "user_id"
    t.integer "chapter_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "services", array: true
    t.float "average_score"
    t.boolean "approved"
    t.string "demand_choices", default: [], array: true
    t.jsonb "translations", default: {}, null: false
    t.boolean "is_active"
    t.string "sort_title_with_variable"
    t.integer "scope_id"
    t.string "scope_type"
    t.index ["scope_id", "scope_type"], name: "index_demands_on_scope_id_and_scope_type"
    t.index ["user_id"], name: "index_demands_on_user_id"
  end

  create_table "devices", force: :cascade do |t|
    t.string "token"
    t.string "os_type"
    t.integer "user_id"
    t.string "model"
    t.string "version"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.boolean "development", default: false
    t.integer "solidarity_user_id"
    t.index ["user_id"], name: "index_devices_on_user_id"
  end

  create_table "discourse_integrations", force: :cascade do |t|
    t.text "connect_url"
    t.text "connect_secret"
    t.text "forum_url"
    t.integer "organization_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "domains", force: :cascade do |t|
    t.string "scope_type"
    t.integer "scope_id"
    t.string "domain"
    t.string "subdomain"
    t.boolean "verified", default: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "host"
    t.string "default_from_email_address"
    t.string "default_from_name"
    t.boolean "verified_for_email", default: false
    t.boolean "use_to_send_emails", default: false
    t.index ["domain"], name: "index_domains_on_domain"
    t.index ["host"], name: "index_domains_on_host"
    t.index ["scope_id", "scope_type"], name: "index_domains_on_scope_id_and_scope_type"
  end

  create_table "donation_charges", force: :cascade do |t|
    t.jsonb "stripe_charge_response"
    t.integer "donation_id"
    t.integer "user_id"
    t.float "amount"
    t.boolean "success"
    t.integer "chapter_id"
    t.integer "payment_card_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "action_page_id"
    t.string "hash_id"
    t.string "receipt_number"
    t.integer "stripe_account_id"
    t.boolean "refunded", default: false
    t.integer "processing_fee_cents"
    t.index ["action_page_id"], name: "index_donation_charges_on_action_page_id"
    t.index ["donation_id"], name: "index_donation_charges_on_donation_id"
    t.index ["stripe_account_id"], name: "index_donation_charges_on_stripe_account_id"
    t.index ["user_id"], name: "index_donation_charges_on_user_id"
  end

  create_table "donations", force: :cascade do |t|
    t.string "stripe_subscription_id"
    t.string "stripe_customer_id"
    t.integer "user_id"
    t.boolean "recurring"
    t.boolean "active"
    t.integer "chapter_id"
    t.string "amount"
    t.string "currency"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "payment_card_id"
    t.integer "action_page_id"
    t.index ["action_page_id"], name: "index_donations_on_action_page_id"
    t.index ["user_id"], name: "index_donations_on_user_id"
  end

  create_table "dues_details", force: :cascade do |t|
    t.string "amount"
    t.integer "user_id"
    t.integer "chapter_id"
    t.boolean "is_active"
    t.string "paypal_agreement_id"
    t.string "paypal_plan_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "paypal_billing_plan_id"
  end

  create_table "dues_membership_charges", force: :cascade do |t|
    t.jsonb "stripe_charge_response"
    t.integer "user_id"
    t.integer "chapter_id"
    t.string "amount"
    t.integer "dues_membership_id"
    t.boolean "success"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "payment_card_id"
    t.string "membership_type"
  end

  create_table "dues_memberships", force: :cascade do |t|
    t.string "stripe_subscription_id"
    t.integer "user_id"
    t.datetime "expires_at", precision: nil
    t.datetime "next_billing_time", precision: nil
    t.boolean "active"
    t.integer "chapter_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "default_payment_card_id"
    t.string "membership_type"
    t.integer "dues_amount"
    t.string "dues_currency"
    t.string "next_billing_job_id"
  end

  create_table "dues_payments", force: :cascade do |t|
    t.integer "user_id"
    t.integer "dues_detail_id"
    t.string "amount"
    t.string "paypal_payment_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "chapter_id"
    t.string "paypal_transaction_id"
  end

  create_table "email_action_connections", force: :cascade do |t|
    t.integer "email_action_id"
    t.string "subject"
    t.text "content"
    t.boolean "sent_email"
    t.integer "user_id"
    t.integer "ahoy_message_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "legislative_district_id"
    t.integer "action_page_id"
  end

  create_table "email_actions", force: :cascade do |t|
    t.string "title"
    t.integer "legislature_ids", default: [], array: true
    t.string "image_url"
    t.text "content"
    t.integer "chapter_id"
    t.string "url"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.text "email_template"
    t.string "email_subject_line"
    t.string "email_type"
    t.jsonb "email_custom_targets"
    t.boolean "delivers_email", default: true
  end

  create_table "email_domains", force: :cascade do |t|
    t.string "domain"
    t.boolean "verified", default: false
    t.jsonb "dns_records", default: {}
    t.integer "scope_id"
    t.string "scope_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "email_messages", force: :cascade do |t|
    t.string "hash_id"
    t.integer "user_filter_id"
    t.jsonb "target_parameters"
    t.text "subject"
    t.text "content"
    t.string "from_name"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "chapter_id"
    t.integer "user_id"
    t.string "reply_to"
    t.datetime "sent_at", precision: nil
    t.text "admin_name"
    t.datetime "finished_delivering_at", precision: nil
    t.integer "scope_id"
    t.string "scope_type"
    t.boolean "paused_sending"
    t.boolean "send_in_progress"
    t.string "from_email_address"
    t.string "scheduled_send_job_id"
    t.datetime "scheduled_to_send_at", precision: nil
    t.jsonb "email_content", default: {}
    t.jsonb "email_subject", default: {}
    t.integer "email_sender_id"
    t.jsonb "email_preview_text", default: {}
    t.string "supported_languages", default: ["en"], array: true
    t.integer "email_wrapper_id"
    t.jsonb "email_attachments", default: {}
    t.integer "target_count_at_send_time"
    t.boolean "track_opens", default: true
    t.boolean "track_clicks", default: true
    t.integer "limit_sends"
    t.index ["scope_id", "scope_type"], name: "index_email_messages_on_scope_id_and_scope_type"
  end

  create_table "email_senders", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.integer "scope_id"
    t.string "scope_type"
    t.boolean "archived"
    t.boolean "shared"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "hash_id"
    t.boolean "default_for_scope", default: false
    t.index ["scope_id", "scope_type"], name: "index_email_senders_on_scope_id_and_scope_type"
  end

  create_table "email_wrappers", force: :cascade do |t|
    t.string "name"
    t.string "scope_type"
    t.integer "scope_id"
    t.boolean "shared"
    t.boolean "archived"
    t.integer "user_id"
    t.text "template"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "hash_id"
    t.boolean "default", default: false
    t.index ["scope_id", "scope_type"], name: "index_email_wrappers_on_scope_id_and_scope_type"
  end

  create_table "file_uploads", force: :cascade do |t|
    t.integer "user_id"
    t.string "file_source"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "file_file_name"
    t.string "file_content_type"
    t.integer "file_file_size"
    t.datetime "file_updated_at", precision: nil
    t.string "hash_id"
    t.string "resource_type"
    t.integer "resource_id"
    t.index ["resource_id", "resource_type"], name: "index_file_uploads_on_resource_id_and_resource_type"
  end

  create_table "flipper_features", force: :cascade do |t|
    t.string "key", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["key"], name: "index_flipper_features_on_key", unique: true
  end

  create_table "flipper_gates", force: :cascade do |t|
    t.string "feature_key", null: false
    t.string "key", null: false
    t.text "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["feature_key", "key", "value"], name: "index_flipper_gates_on_feature_key_and_key_and_value", unique: true
  end

  create_table "forms", force: :cascade do |t|
    t.string "internal_name"
    t.integer "action_page_id"
    t.jsonb "components", default: []
    t.integer "last_edited_by_user_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.text "liquid_variables"
    t.boolean "autosave", default: false
    t.boolean "disable_animations", default: false
    t.integer "default_chapter_id"
    t.boolean "require_recaptcha", default: false
    t.index ["action_page_id"], name: "index_forms_on_action_page_id"
  end

  create_table "friendly_id_slugs", force: :cascade do |t|
    t.string "slug", null: false
    t.integer "sluggable_id", null: false
    t.string "sluggable_type", limit: 50
    t.string "scope"
    t.datetime "created_at", precision: nil
    t.index ["slug", "sluggable_type", "scope"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type_and_scope", unique: true
    t.index ["sluggable_id"], name: "index_friendly_id_slugs_on_sluggable_id"
    t.index ["sluggable_type"], name: "index_friendly_id_slugs_on_sluggable_type"
  end

  create_table "image_uploads", force: :cascade do |t|
    t.integer "user_id"
    t.string "image_type"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at", precision: nil
    t.string "image_url"
  end

  create_table "integrations", force: :cascade do |t|
    t.string "integration_type"
    t.jsonb "data"
    t.integer "chapter_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "hash_id"
  end

  create_table "legislative_districts", force: :cascade do |t|
    t.string "name"
    t.string "district"
    t.jsonb "properties"
    t.integer "legislature_id"
    t.string "rep_name"
    t.string "rep_district_phone"
    t.string "rep_capitol_phone"
    t.string "rep_email"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.geography "bounds", limit: {:srid=>4326, :type=>"multi_polygon", :geographic=>true}
    t.index ["bounds"], name: "index_legislative_districts_on_bounds", using: :gist
    t.index ["legislature_id"], name: "index_legislative_districts_on_legislature_id"
  end

  create_table "legislators", force: :cascade do |t|
    t.string "name"
    t.integer "legislative_district_id"
    t.string "district_phone"
    t.string "capitol_phone"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.jsonb "properties", default: {}
    t.index ["legislative_district_id"], name: "index_legislators_on_legislative_district_id"
  end

  create_table "legislatures", force: :cascade do |t|
    t.string "name"
    t.string "file_name"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "legislators_per_district", default: 1
    t.string "election_type", default: "district"
    t.string "level"
    t.string "legislature_type"
    t.boolean "can_email"
    t.boolean "can_call"
    t.boolean "is_active", default: true
  end

  create_table "login_activities", force: :cascade do |t|
    t.string "scope"
    t.string "strategy"
    t.string "identity"
    t.boolean "success"
    t.string "failure_reason"
    t.string "user_type"
    t.bigint "user_id"
    t.string "context"
    t.string "ip"
    t.text "user_agent"
    t.text "referrer"
    t.string "city"
    t.string "region"
    t.string "country"
    t.float "latitude"
    t.float "longitude"
    t.datetime "created_at", precision: nil
    t.index ["identity"], name: "index_login_activities_on_identity"
    t.index ["ip"], name: "index_login_activities_on_ip"
    t.index ["user_type", "user_id"], name: "index_login_activities_on_user_type_and_user_id"
  end

  create_table "mailkick_opt_outs", force: :cascade do |t|
    t.string "email"
    t.string "user_type"
    t.bigint "user_id"
    t.boolean "active", default: true, null: false
    t.string "reason"
    t.string "list"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "email_message_id"
    t.index ["email"], name: "index_mailkick_opt_outs_on_email"
    t.index ["user_type", "user_id"], name: "index_mailkick_opt_outs_on_user_type_and_user_id"
  end

  create_table "menu_bars", force: :cascade do |t|
    t.jsonb "components"
    t.integer "website_id"
    t.string "background_color"
    t.string "text_color"
    t.integer "brand_image_upload_id"
    t.string "brand_text_custom"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "brand_status"
    t.boolean "social_media_links", default: false
    t.text "footer_html"
    t.string "brand_url"
    t.boolean "enabled", default: true
  end

  create_table "messages", force: :cascade do |t|
    t.text "deliver_via", default: [], array: true
    t.integer "sender_id"
    t.integer "recipient_id"
    t.text "content"
    t.boolean "expects_response"
    t.integer "conversation_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "chapter_poll_id"
    t.string "status"
    t.integer "chapter_phone_number_id"
    t.boolean "unsolicited"
    t.integer "twilio_error_code"
    t.string "twilio_sms_sid"
    t.string "twilio_sms_status"
    t.string "image_urls", default: [], array: true
    t.integer "chapter_id"
    t.boolean "sent_by_agent"
    t.boolean "automated"
    t.integer "text_message_id"
    t.integer "sent_by_agent_id"
    t.integer "segment_size"
    t.integer "mobilize_event_task_id"
    t.integer "user_id"
    t.string "direction"
    t.index ["automated"], name: "index_messages_on_automated"
    t.index ["chapter_id"], name: "index_messages_on_chapter_id"
    t.index ["chapter_phone_number_id"], name: "index_messages_on_chapter_phone_number_id"
    t.index ["conversation_id"], name: "index_messages_on_conversation_id"
    t.index ["created_at"], name: "index_messages_on_created_at"
    t.index ["direction"], name: "index_messages_on_direction"
    t.index ["recipient_id"], name: "index_messages_on_recipient_id"
    t.index ["sender_id"], name: "index_messages_on_sender_id"
    t.index ["sent_by_agent_id"], name: "index_messages_on_sent_by_agent_id"
    t.index ["status"], name: "index_messages_on_status"
    t.index ["text_message_id"], name: "index_messages_on_text_message_id"
    t.index ["twilio_sms_sid"], name: "index_messages_on_twilio_sms_sid"
    t.index ["unsolicited"], name: "index_messages_on_unsolicited"
    t.index ["user_id", "created_at"], name: "index_messages_on_user_id_and_created_at"
    t.index ["user_id"], name: "index_messages_on_user_id"
  end

  create_table "mobilize_event_agents", force: :cascade do |t|
    t.integer "user_id"
    t.integer "mobilize_event_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "access", default: [], array: true
    t.integer "mobilize_event_task_id"
  end

  create_table "mobilize_event_attendances", force: :cascade do |t|
    t.integer "mobilize_event_invite_id"
    t.integer "mobilize_event_id"
    t.integer "user_id"
    t.boolean "attended"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "mobilize_event_calendar_item_id"
    t.index ["mobilize_event_id"], name: "index_mobilize_event_attendances_on_mobilize_event_id"
    t.index ["mobilize_event_invite_id"], name: "index_mobilize_event_attendances_on_mobilize_event_invite_id"
    t.index ["user_id"], name: "index_mobilize_event_attendances_on_user_id"
  end

  create_table "mobilize_event_calendar_items", force: :cascade do |t|
    t.integer "mobilize_event_id"
    t.datetime "start_time", precision: nil
    t.datetime "end_time", precision: nil
    t.string "title"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "location_name"
    t.jsonb "location_data"
    t.geography "lonlat", limit: {:srid=>4326, :type=>"st_point", :geographic=>true}
    t.string "location_address"
    t.boolean "show_rsvp_bar", default: true
    t.boolean "show_title_in_form", default: false
    t.jsonb "reminder_scheduled_job_ids", default: {}
    t.index ["mobilize_event_id"], name: "index_mobilize_event_calendar_items_on_mobilize_event_id"
  end

  create_table "mobilize_event_contact_attempts", force: :cascade do |t|
    t.integer "agent_user_id"
    t.integer "user_id"
    t.integer "mobilize_event_task_id"
    t.integer "mobilize_event_id"
    t.integer "mobilize_event_invite_id"
    t.integer "mobilize_event_workflow_id"
    t.integer "attempted_id"
    t.string "attempted_type"
    t.boolean "got_response"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.boolean "received_callback_after_missed_call"
    t.integer "chapter_phone_number_id"
    t.index ["agent_user_id"], name: "index_mobilize_event_contact_attempts_on_agent_user_id"
    t.index ["attempted_id", "attempted_type"], name: "mecas_attempted_index"
    t.index ["attempted_type"], name: "index_mobilize_event_contact_attempts_on_attempted_type"
    t.index ["mobilize_event_id"], name: "index_mobilize_event_contact_attempts_on_mobilize_event_id"
    t.index ["mobilize_event_task_id"], name: "index_mobilize_event_contact_attempts_on_mobilize_event_task_id"
    t.index ["received_callback_after_missed_call"], name: "idx_on_received_callback_after_missed_call_4a906d654e"
    t.index ["user_id"], name: "index_mobilize_event_contact_attempts_on_user_id"
  end

  create_table "mobilize_event_invites", force: :cascade do |t|
    t.integer "mobilize_event_id"
    t.integer "invited_by_id"
    t.integer "user_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "agent_id"
    t.integer "initial_agent_id"
    t.integer "mobilize_event_task_id"
    t.index ["agent_id"], name: "index_mobilize_event_invites_on_agent_id"
    t.index ["initial_agent_id"], name: "index_mobilize_event_invites_on_initial_agent_id"
    t.index ["invited_by_id"], name: "index_mobilize_event_invites_on_invited_by_id"
    t.index ["mobilize_event_id"], name: "index_mobilize_event_invites_on_mobilize_event_id"
    t.index ["mobilize_event_task_id"], name: "index_mobilize_event_invites_on_mobilize_event_task_id"
    t.index ["user_id", "mobilize_event_id"], name: "index_mobilize_event_invites_on_user_id_and_mobilize_event_id"
    t.index ["user_id"], name: "index_mobilize_event_invites_on_user_id"
  end

  create_table "mobilize_event_reminder_deliveries", force: :cascade do |t|
    t.integer "mobilize_event_id"
    t.integer "mobilize_event_calendar_item_id"
    t.string "stage"
    t.string "medium"
    t.integer "user_ids", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "mobilize_event_rsvps", force: :cascade do |t|
    t.integer "mobilize_event_id"
    t.integer "user_id"
    t.integer "agent_id"
    t.integer "chapter_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.boolean "attending"
    t.integer "agent_user_assignment_id"
    t.integer "mobilize_event_invite_id"
    t.string "is_attending"
    t.string "source"
    t.string "source_system"
    t.integer "mobilize_event_calendar_item_id"
    t.boolean "confirmed"
    t.index ["mobilize_event_calendar_item_id"], name: "index_mobilize_event_rsvps_on_mobilize_event_calendar_item_id"
    t.index ["mobilize_event_id"], name: "index_mobilize_event_rsvps_on_mobilize_event_id"
    t.index ["user_id", "mobilize_event_calendar_item_id"], name: "index_mobilize_event_rsvps_on_user_id_and_calendar_item_id", unique: true
    t.index ["user_id", "mobilize_event_id"], name: "index_mobilize_event_rsvps_on_user_id_and_mobilize_event_id"
  end

  create_table "mobilize_event_self_rsvps", force: :cascade do |t|
    t.integer "user_id"
    t.integer "mobilize_event_id"
    t.integer "mobilize_event_rsvp_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "mobilize_event_tasks", force: :cascade do |t|
    t.string "medium"
    t.datetime "begins_at", precision: nil
    t.string "targets"
    t.integer "mobilize_event_id"
    t.boolean "completed"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.text "sms_starting_script"
    t.integer "user_id"
    t.datetime "ends_at", precision: nil
    t.integer "phonebank_target_count"
    t.jsonb "translations", default: {}, null: false
    t.integer "textbank_target_count"
    t.integer "chapter_id"
    t.jsonb "target_parameters"
    t.string "title"
    t.jsonb "hours", default: {}
    t.string "phone_number_selection_method"
    t.integer "phone_number_block_id"
    t.string "assignment_strategy"
    t.boolean "exclude_previously_rsvpd", default: true
    t.string "sort_order", default: "created_at_desc"
    t.jsonb "sort_order_custom_filter", default: {}
    t.jsonb "sms_attachments", default: {}
    t.string "contact_strategy", default: "anyone"
    t.string "dialer_strategy"
    t.jsonb "voicemail", default: {}
    t.string "abandoned_calls", default: "hangup"
    t.float "acceptable_abandon_rate", default: 0.03
    t.jsonb "sms_automation", default: {}
    t.integer "minimum_callers_for_predictive_dialing"
    t.index ["mobilize_event_id"], name: "index_mobilize_event_tasks_on_mobilize_event_id"
  end

  create_table "mobilize_event_workflows", force: :cascade do |t|
    t.integer "user_id"
    t.integer "mobilize_event_task_id"
    t.integer "mobilize_event_id"
    t.integer "contacts_batch_count"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.boolean "completed"
  end

  create_table "mobilize_events", force: :cascade do |t|
    t.string "title"
    t.datetime "start_time", precision: nil
    t.string "location_name"
    t.integer "chapter_id"
    t.text "starting_script"
    t.string "timezone"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.text "rsvp_yes_script"
    t.text "rsvp_no_script"
    t.string "event_scope"
    t.string "targeting_tags", default: [], array: true
    t.text "html_content"
    t.datetime "end_time", precision: nil
    t.jsonb "location_data"
    t.geography "lonlat", limit: {:srid=>4326, :type=>"st_point", :geographic=>true}
    t.integer "action_page_id"
    t.jsonb "target_parameters"
    t.jsonb "follow_up", default: {}
    t.integer "scope_id"
    t.string "scope_type"
    t.string "event_type"
    t.boolean "always_hide_global_text_templates", default: false
    t.jsonb "confirmations", default: {}
    t.jsonb "rsvp_text_reply_templates", default: {}
    t.jsonb "recurring_session", default: {}
    t.string "supported_languages", default: ["en"], array: true
    t.jsonb "day_before_reminders", default: {}
    t.jsonb "day_of_reminders", default: {}
    t.boolean "rsvp_confirmations_enabled", default: false
    t.integer "rsvp_confirmations_shown_days_before", default: 2
    t.index ["scope_id", "scope_type"], name: "index_mobilize_events_on_scope_id_and_scope_type"
  end

  create_table "organization_admins", force: :cascade do |t|
    t.integer "user_id"
    t.integer "organization_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "organization_billing_charges", force: :cascade do |t|
    t.jsonb "charge_response"
    t.integer "organization_id"
    t.decimal "amount"
    t.integer "payment_card_id"
    t.integer "user_id"
    t.string "ip"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "organization_billing_id"
    t.boolean "success"
    t.integer "organization_invoice_id"
  end

  create_table "organization_billings", force: :cascade do |t|
    t.string "billing_method"
    t.decimal "billing_price_per_contact", precision: 8, scale: 4
    t.decimal "billing_price_per_incoming_text", precision: 8, scale: 4
    t.decimal "billing_price_per_outgoing_text", precision: 8, scale: 4
    t.decimal "billing_price_per_voice_minute", precision: 8, scale: 4
    t.integer "billing_agent_user_id"
    t.integer "default_payment_card_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "organization_id"
    t.integer "base_price_cents", default: 0
    t.boolean "autocharge", default: true
    t.integer "billing_plan_id"
    t.float "discount_percentage", default: 0.0
    t.integer "max_contacts"
    t.integer "billing_cycle_day_of_month", default: 1
    t.boolean "is_active"
  end

  create_table "organization_invoices", force: :cascade do |t|
    t.string "title"
    t.datetime "period_start", precision: nil
    t.datetime "period_end", precision: nil
    t.jsonb "data"
    t.integer "organization_id"
    t.boolean "paid"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "hash_id"
    t.index ["organization_id", "title"], name: "index_organization_invoices_on_organization_id_and_title", unique: true
  end

  create_table "organizations", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "hash_id"
    t.string "ancestry"
    t.string "title"
    t.string "subtitle"
    t.integer "icon_file_upload_id"
    t.jsonb "translations", default: {}
    t.string "url_slug"
    t.string "default_language", default: "en"
    t.string "supported_languages", default: ["en"], array: true
    t.jsonb "social_media", default: {}
    t.jsonb "properties", default: {}, null: false
    t.jsonb "assessment_statuses", default: [], null: false
    t.string "twilio_subaccount_sid"
    t.string "twilio_api_key"
    t.string "twilio_api_secret"
    t.string "twilio_twiml_app_sid"
    t.string "twilio_messaging_service_sid"
    t.string "twilio_subaccount_auth_token"
    t.string "chapter_assignment_strategy"
    t.integer "default_chapter_id"
    t.index ["ancestry"], name: "index_organizations_on_ancestry"
    t.index ["url_slug"], name: "index_organizations_on_url_slug"
  end

  create_table "payment_cards", force: :cascade do |t|
    t.string "stripe_customer_id"
    t.string "stripe_card_id"
    t.string "last4"
    t.string "brand"
    t.integer "dues_membership_id"
    t.integer "user_id"
    t.string "zip_code"
    t.string "client_ip"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.datetime "expiration_date", precision: nil
    t.string "email"
    t.string "street_address_1"
    t.string "city"
    t.string "state"
    t.string "country"
    t.integer "organization_id"
  end

  create_table "paypal_billing_plans", force: :cascade do |t|
    t.string "billing_plan_id"
    t.string "environment"
    t.string "amount"
    t.string "currency"
    t.string "name"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "phone_number_blocks", force: :cascade do |t|
    t.integer "contacts_per_phone_number"
    t.string "name"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "phone_numbers", force: :cascade do |t|
    t.integer "user_id"
    t.string "phone_number"
    t.string "source"
    t.jsonb "carrier"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["created_at"], name: "index_phone_numbers_on_created_at"
    t.index ["phone_number"], name: "index_phone_numbers_on_phone_number"
  end

  create_table "postal_codes", force: :cascade do |t|
    t.string "country_code"
    t.string "postal_code"
    t.string "place_name"
    t.string "admin_name1"
    t.string "admin_code1"
    t.string "admin_name2"
    t.string "admin_code2"
    t.string "admin_name3"
    t.string "admin_code3"
    t.geography "lonlat", limit: {:srid=>4326, :type=>"st_point", :geographic=>true}
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["country_code"], name: "index_postal_codes_on_country_code"
    t.index ["postal_code"], name: "index_postal_codes_on_postal_code"
  end

  create_table "predictive_dialer_sessions", force: :cascade do |t|
    t.integer "mobilize_event_task_id"
    t.datetime "ended_at", precision: nil
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["mobilize_event_task_id"], name: "index_predictive_dialer_sessions_on_mobilize_event_task_id"
  end

  create_table "push_notification_messages", force: :cascade do |t|
    t.string "title"
    t.text "message"
    t.string "pushable_type"
    t.integer "pushable_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reported_spam_phone_numbers", force: :cascade do |t|
    t.integer "organization_id"
    t.integer "user_id"
    t.string "phone_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ride_price_lookups", force: :cascade do |t|
    t.string "start_label"
    t.string "end_label"
    t.string "service"
    t.hstore "pricing"
    t.geography "start_lonlat", limit: {:srid=>4326, :type=>"st_point", :geographic=>true}
    t.geography "end_lonlat", limit: {:srid=>4326, :type=>"st_point", :geographic=>true}
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.text "raw_response"
    t.float "price"
    t.date "date"
    t.integer "hour"
  end

  create_table "rideshare_market_price_updates", force: :cascade do |t|
    t.integer "rideshare_market_id"
    t.string "service"
    t.text "raw_html"
    t.hstore "pricing"
    t.boolean "changed_since_last_check"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "rideshare_markets", force: :cascade do |t|
    t.string "city_name"
    t.text "uber_market_data_url"
    t.text "lyft_market_data_url"
    t.hstore "uber_pricing"
    t.hstore "lyft_pricing"
    t.string "country"
    t.geography "lonlat", limit: {:srid=>4326, :type=>"st_point", :geographic=>true}
    t.integer "chapter_id"
    t.string "state"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.float "average_trip_distance"
    t.float "average_trip_time"
    t.float "average_trips_per_hour"
    t.float "average_gas_price"
    t.string "state_minimum_wage"
    t.string "city_minimum_wage"
    t.float "gas_prices_in_state"
    t.datetime "gas_prices_in_state_last_updated", precision: nil
    t.string "display_name"
    t.boolean "active"
    t.string "city_living_wage"
    t.string "living_wage_url"
  end

  create_table "roles", force: :cascade do |t|
    t.integer "organization_id"
    t.string "permissions", default: [], array: true
    t.string "name"
    t.integer "created_by_user_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "hash_id"
  end

  create_table "rpush_apps", force: :cascade do |t|
    t.string "name", null: false
    t.string "environment"
    t.text "certificate"
    t.string "password"
    t.integer "connections", default: 1, null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "type", null: false
    t.string "auth_key"
    t.string "client_id"
    t.string "client_secret"
    t.string "access_token"
    t.datetime "access_token_expiration", precision: nil
    t.text "apn_key"
    t.string "apn_key_id"
    t.string "team_id"
    t.string "bundle_id"
    t.boolean "feedback_enabled", default: true
  end

  create_table "rpush_feedback", force: :cascade do |t|
    t.string "device_token"
    t.datetime "failed_at", precision: nil, null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "app_id"
    t.index ["device_token"], name: "index_rpush_feedback_on_device_token"
  end

  create_table "rpush_notifications", force: :cascade do |t|
    t.integer "badge"
    t.string "device_token"
    t.string "sound"
    t.text "alert"
    t.text "data"
    t.integer "expiry", default: 86400
    t.boolean "delivered", default: false, null: false
    t.datetime "delivered_at", precision: nil
    t.boolean "failed", default: false, null: false
    t.datetime "failed_at", precision: nil
    t.integer "error_code"
    t.text "error_description"
    t.datetime "deliver_after", precision: nil
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.boolean "alert_is_json", default: false, null: false
    t.string "type", null: false
    t.string "collapse_key"
    t.boolean "delay_while_idle", default: false, null: false
    t.text "registration_ids"
    t.integer "app_id", null: false
    t.integer "retries", default: 0
    t.string "uri"
    t.datetime "fail_after", precision: nil
    t.boolean "processing", default: false, null: false
    t.integer "priority"
    t.text "url_args"
    t.string "category"
    t.boolean "content_available", default: false, null: false
    t.text "notification"
    t.boolean "mutable_content", default: false, null: false
    t.string "external_device_id"
    t.string "thread_id"
    t.boolean "dry_run", default: false, null: false
    t.boolean "sound_is_json", default: false
    t.integer "push_notification_message_id"
    t.integer "user_id"
    t.index ["delivered", "failed", "processing", "deliver_after", "created_at"], name: "index_rpush_notifications_multi", where: "((NOT delivered) AND (NOT failed))"
  end

  create_table "scheduled_calls", force: :cascade do |t|
    t.integer "volunteer_availability_id"
    t.integer "user_id"
    t.integer "agent_id"
    t.datetime "call_time", precision: nil
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "agent_calendar_event_id"
    t.string "language"
    t.integer "agent_user_call_id"
    t.integer "action_page_id"
    t.string "medium", default: "phone"
    t.jsonb "zoom_meeting_data", default: {}
    t.index ["action_page_id"], name: "index_scheduled_calls_on_action_page_id"
    t.index ["agent_id"], name: "index_scheduled_calls_on_agent_id"
    t.index ["user_id"], name: "index_scheduled_calls_on_user_id"
  end

  create_table "scheduled_tasks", force: :cascade do |t|
    t.datetime "due_at", precision: nil
    t.datetime "remind_me_at", precision: nil
    t.integer "agent_id"
    t.integer "user_id"
    t.text "notes"
    t.string "task_type"
    t.integer "created_by_user_id"
    t.boolean "sent_agent_reminder"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.boolean "marked_as_completed", default: false
    t.string "agent_reminder_key"
    t.string "agent_reminder_jid"
    t.string "agent_notice_jid"
    t.index ["agent_id"], name: "index_scheduled_tasks_on_agent_id"
    t.index ["user_id"], name: "index_scheduled_tasks_on_user_id"
  end

  create_table "searchjoy_searches", force: :cascade do |t|
    t.bigint "user_id"
    t.string "search_type"
    t.string "query"
    t.string "normalized_query"
    t.integer "results_count"
    t.datetime "created_at", precision: nil
    t.string "convertable_type"
    t.bigint "convertable_id"
    t.datetime "converted_at", precision: nil
    t.index ["convertable_type", "convertable_id"], name: "index_searchjoy_searches_on_convertable"
    t.index ["created_at"], name: "index_searchjoy_searches_on_created_at"
    t.index ["search_type", "created_at"], name: "index_searchjoy_searches_on_search_type_and_created_at"
    t.index ["search_type", "normalized_query", "created_at"], name: "index_searchjoy_searches_on_search_type_query"
    t.index ["user_id"], name: "index_searchjoy_searches_on_user_id"
  end

  create_table "slack_invites", force: :cascade do |t|
    t.string "email"
    t.boolean "accepted"
    t.jsonb "slack_user"
    t.integer "user_id"
    t.integer "chapter_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "solidarity_tokens", force: :cascade do |t|
    t.string "hash_id"
    t.integer "user_id"
    t.integer "action_page_id"
    t.string "ab_test_name"
    t.integer "clicks"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.jsonb "options", default: {}
    t.index ["hash_id"], name: "index_solidarity_tokens_on_hash_id"
  end

  create_table "solidarity_users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "phone_number"
    t.boolean "phone_number_verified", default: false
    t.boolean "email_verified", default: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_name"
    t.boolean "is_admin", default: false
    t.index ["email"], name: "index_solidarity_users_on_email", unique: true
    t.index ["phone_number"], name: "index_solidarity_users_on_phone_number"
    t.index ["reset_password_token"], name: "index_solidarity_users_on_reset_password_token", unique: true
  end

  create_table "states", force: :cascade do |t|
    t.string "abbr", limit: 2
    t.string "name"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["abbr"], name: "index_states_on_abbr"
  end

  create_table "stripe_accounts", force: :cascade do |t|
    t.string "name"
    t.integer "scope_id"
    t.string "scope_type"
    t.string "hash_id"
    t.string "stripe_account_id"
    t.integer "user_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.jsonb "data", default: {}, null: false
    t.string "stripe_product_id"
  end

  create_table "system_emails", force: :cascade do |t|
    t.string "name"
    t.string "subtitle"
    t.string "hash_id"
    t.integer "organization_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.jsonb "email_data", default: {}, null: false
  end

  create_table "team_member_group_memberships", force: :cascade do |t|
    t.integer "team_member_group_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "team_member_groups", force: :cascade do |t|
    t.string "name"
    t.integer "user_id"
    t.integer "scope_id"
    t.string "scope_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "root_organization_id"
  end

  create_table "team_phone_numbers", force: :cascade do |t|
    t.string "phone_number"
    t.integer "root_organization_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "temp_assignments", force: :cascade do |t|
    t.integer "user_id"
    t.integer "agent_id"
    t.integer "mobilize_event_id"
    t.integer "mobilize_event_contact_attempt_id"
    t.integer "mobilize_event_task_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.datetime "expires_at", precision: nil
    t.boolean "skipped", default: false
    t.index ["agent_id"], name: "index_temp_assignments_on_agent_id"
    t.index ["mobilize_event_contact_attempt_id"], name: "index_temp_assignments_on_mobilize_event_contact_attempt_id"
    t.index ["mobilize_event_id"], name: "index_temp_assignments_on_mobilize_event_id"
    t.index ["mobilize_event_task_id"], name: "index_temp_assignments_on_mobilize_event_task_id"
    t.index ["user_id"], name: "index_temp_assignments_on_user_id"
  end

  create_table "text_keywords", force: :cascade do |t|
    t.string "keyword"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "root_organization_id"
  end

  create_table "text_messages", force: :cascade do |t|
    t.string "hash_id"
    t.string "admin_name"
    t.jsonb "target_parameters"
    t.text "content"
    t.integer "chapter_id"
    t.integer "user_id"
    t.datetime "sent_at", precision: nil
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "image_urls", default: [], array: true
    t.boolean "paused_sending"
    t.boolean "send_in_progress"
    t.datetime "finished_delivering_at", precision: nil
    t.integer "scope_id"
    t.string "scope_type"
    t.string "scheduled_send_job_id"
    t.datetime "scheduled_to_send_at", precision: nil
    t.boolean "track_clicks", default: true
    t.integer "target_count_at_send_time"
    t.jsonb "text_attachments", default: {}
    t.string "supported_languages", default: ["en"], array: true
    t.jsonb "text_content", default: {}
    t.integer "limit_sends"
    t.index ["scope_id", "scope_type"], name: "index_text_messages_on_scope_id_and_scope_type"
  end

  create_table "text_templates", force: :cascade do |t|
    t.string "name"
    t.boolean "archived", default: false
    t.integer "scope_id"
    t.string "scope_type"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.jsonb "template", default: {}
    t.string "template_type"
    t.string "hash_id"
    t.integer "mobilize_event_id"
  end

  create_table "thredded_categories", force: :cascade do |t|
    t.bigint "messageboard_id", null: false
    t.text "name", null: false
    t.text "description"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.text "slug", null: false
    t.index "lower(name) text_pattern_ops", name: "thredded_categories_name_ci"
    t.index ["messageboard_id", "slug"], name: "index_thredded_categories_on_messageboard_id_and_slug", unique: true
  end

  create_table "thredded_messageboard_groups", force: :cascade do |t|
    t.string "name"
    t.integer "position", null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "thredded_messageboard_notifications_for_followed_topics", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "messageboard_id", null: false
    t.string "notifier_key", limit: 90, null: false
    t.boolean "enabled", default: true, null: false
    t.index ["user_id", "messageboard_id", "notifier_key"], name: "thredded_messageboard_notifications_for_followed_topics_unique", unique: true
  end

  create_table "thredded_messageboard_users", force: :cascade do |t|
    t.bigint "thredded_user_detail_id", null: false
    t.bigint "thredded_messageboard_id", null: false
    t.datetime "last_seen_at", precision: nil, null: false
    t.index ["thredded_messageboard_id", "last_seen_at"], name: "index_thredded_messageboard_users_for_recently_active"
    t.index ["thredded_messageboard_id", "thredded_user_detail_id"], name: "index_thredded_messageboard_users_primary", unique: true
  end

  create_table "thredded_messageboards", force: :cascade do |t|
    t.text "name", null: false
    t.text "slug"
    t.text "description"
    t.integer "topics_count", default: 0
    t.integer "posts_count", default: 0
    t.integer "position", null: false
    t.bigint "last_topic_id"
    t.bigint "messageboard_group_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.boolean "locked", default: false, null: false
    t.index ["messageboard_group_id"], name: "index_thredded_messageboards_on_messageboard_group_id"
    t.index ["slug"], name: "index_thredded_messageboards_on_slug", unique: true
  end

  create_table "thredded_notifications_for_followed_topics", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "notifier_key", limit: 90, null: false
    t.boolean "enabled", default: true, null: false
    t.index ["user_id", "notifier_key"], name: "thredded_notifications_for_followed_topics_unique", unique: true
  end

  create_table "thredded_notifications_for_private_topics", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "notifier_key", limit: 90, null: false
    t.boolean "enabled", default: true, null: false
    t.index ["user_id", "notifier_key"], name: "thredded_notifications_for_private_topics_unique", unique: true
  end

  create_table "thredded_post_moderation_records", force: :cascade do |t|
    t.bigint "post_id"
    t.bigint "messageboard_id"
    t.text "post_content"
    t.bigint "post_user_id"
    t.text "post_user_name"
    t.bigint "moderator_id"
    t.integer "moderation_state", null: false
    t.integer "previous_moderation_state", null: false
    t.datetime "created_at", precision: nil, null: false
    t.index ["messageboard_id", "created_at"], name: "index_thredded_moderation_records_for_display", order: { created_at: :desc }
  end

  create_table "thredded_posts", force: :cascade do |t|
    t.bigint "user_id"
    t.text "content"
    t.string "source", limit: 191, default: "web"
    t.bigint "postable_id", null: false
    t.bigint "messageboard_id", null: false
    t.integer "moderation_state", null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "ip", limit: 45
    t.index "to_tsvector('english'::regconfig, content)", name: "thredded_posts_content_fts", using: :gist
    t.index ["messageboard_id"], name: "index_thredded_posts_on_messageboard_id"
    t.index ["moderation_state", "updated_at"], name: "index_thredded_posts_for_display"
    t.index ["postable_id"], name: "index_thredded_posts_on_postable_id"
    t.index ["user_id"], name: "index_thredded_posts_on_user_id"
  end

  create_table "thredded_private_posts", force: :cascade do |t|
    t.bigint "user_id"
    t.text "content"
    t.bigint "postable_id", null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "ip", limit: 45
    t.index ["postable_id", "created_at"], name: "index_thredded_private_posts_on_postable_id_and_created_at"
  end

  create_table "thredded_private_topics", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "last_user_id"
    t.text "title", null: false
    t.text "slug", null: false
    t.integer "posts_count", default: 0
    t.string "hash_id", limit: 20, null: false
    t.datetime "last_post_at", precision: nil
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["hash_id"], name: "index_thredded_private_topics_on_hash_id"
    t.index ["last_post_at"], name: "index_thredded_private_topics_on_last_post_at"
    t.index ["slug"], name: "index_thredded_private_topics_on_slug", unique: true
  end

  create_table "thredded_private_users", force: :cascade do |t|
    t.bigint "private_topic_id"
    t.bigint "user_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["private_topic_id"], name: "index_thredded_private_users_on_private_topic_id"
    t.index ["user_id"], name: "index_thredded_private_users_on_user_id"
  end

  create_table "thredded_topic_categories", force: :cascade do |t|
    t.bigint "topic_id", null: false
    t.bigint "category_id", null: false
    t.index ["category_id"], name: "index_thredded_topic_categories_on_category_id"
    t.index ["topic_id"], name: "index_thredded_topic_categories_on_topic_id"
  end

  create_table "thredded_topics", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "last_user_id"
    t.text "title", null: false
    t.text "slug", null: false
    t.bigint "messageboard_id", null: false
    t.integer "posts_count", default: 0, null: false
    t.boolean "sticky", default: false, null: false
    t.boolean "locked", default: false, null: false
    t.string "hash_id", limit: 20, null: false
    t.integer "moderation_state", null: false
    t.datetime "last_post_at", precision: nil
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index "to_tsvector('english'::regconfig, title)", name: "thredded_topics_title_fts", using: :gist
    t.index ["hash_id"], name: "index_thredded_topics_on_hash_id"
    t.index ["last_post_at"], name: "index_thredded_topics_on_last_post_at"
    t.index ["messageboard_id"], name: "index_thredded_topics_on_messageboard_id"
    t.index ["moderation_state", "sticky", "updated_at"], name: "index_thredded_topics_for_display", order: { sticky: :desc, updated_at: :desc }
    t.index ["slug"], name: "index_thredded_topics_on_slug", unique: true
    t.index ["user_id"], name: "index_thredded_topics_on_user_id"
  end

  create_table "thredded_user_details", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.datetime "latest_activity_at", precision: nil
    t.integer "posts_count", default: 0
    t.integer "topics_count", default: 0
    t.datetime "last_seen_at", precision: nil
    t.integer "moderation_state", default: 0, null: false
    t.datetime "moderation_state_changed_at", precision: nil
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["latest_activity_at"], name: "index_thredded_user_details_on_latest_activity_at"
    t.index ["moderation_state", "moderation_state_changed_at"], name: "index_thredded_user_details_for_moderations", order: { moderation_state_changed_at: :desc }
    t.index ["user_id"], name: "index_thredded_user_details_on_user_id", unique: true
  end

  create_table "thredded_user_messageboard_preferences", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "messageboard_id", null: false
    t.boolean "follow_topics_on_mention", default: true, null: false
    t.boolean "auto_follow_topics", default: false, null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["user_id", "messageboard_id"], name: "thredded_user_messageboard_preferences_user_id_messageboard_id", unique: true
  end

  create_table "thredded_user_post_notifications", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "post_id", null: false
    t.datetime "notified_at", precision: nil, null: false
    t.index ["post_id"], name: "index_thredded_user_post_notifications_on_post_id"
    t.index ["user_id", "post_id"], name: "index_thredded_user_post_notifications_on_user_id_and_post_id", unique: true
  end

  create_table "thredded_user_preferences", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.boolean "follow_topics_on_mention", default: true, null: false
    t.boolean "auto_follow_topics", default: false, null: false
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["user_id"], name: "index_thredded_user_preferences_on_user_id", unique: true
  end

  create_table "thredded_user_private_topic_read_states", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "postable_id", null: false
    t.datetime "read_at", precision: nil, null: false
    t.integer "unread_posts_count", default: 0, null: false
    t.integer "read_posts_count", default: 0, null: false
    t.index ["user_id", "postable_id"], name: "thredded_user_private_topic_read_states_user_postable", unique: true
  end

  create_table "thredded_user_topic_follows", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "topic_id", null: false
    t.datetime "created_at", precision: nil, null: false
    t.integer "reason", limit: 2
    t.index ["user_id", "topic_id"], name: "thredded_user_topic_follows_user_topic", unique: true
  end

  create_table "thredded_user_topic_read_states", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "postable_id", null: false
    t.datetime "read_at", precision: nil, null: false
    t.integer "unread_posts_count", default: 0, null: false
    t.integer "read_posts_count", default: 0, null: false
    t.bigint "messageboard_id", null: false
    t.index ["messageboard_id"], name: "index_thredded_user_topic_read_states_on_messageboard_id"
    t.index ["user_id", "messageboard_id"], name: "thredded_user_topic_read_states_user_messageboard"
    t.index ["user_id", "postable_id"], name: "thredded_user_topic_read_states_user_postable", unique: true
  end

  create_table "url_shorteners", force: :cascade do |t|
    t.text "redirect_url"
    t.string "short_url"
    t.integer "user_id"
    t.string "unique_key"
    t.datetime "expires_at", precision: nil
    t.string "url_type"
    t.integer "clicks"
    t.boolean "valid_url", default: true
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "ab_test_name"
    t.integer "message_resource_id"
    t.string "message_resource_type"
    t.index ["unique_key"], name: "index_url_shorteners_on_unique_key"
  end

  create_table "user_action_moderations", force: :cascade do |t|
    t.integer "user_action_id"
    t.integer "moderator_id"
    t.boolean "approved"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "user_actions", force: :cascade do |t|
    t.jsonb "data"
    t.integer "action_page_id"
    t.integer "user_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.string "source"
    t.integer "referred_by_user_id"
    t.string "ip"
    t.integer "visit_id"
    t.integer "user_message_link_click_id"
    t.index ["action_page_id"], name: "index_user_actions_on_action_page_id"
    t.index ["data"], name: "index_user_actions_on_data", using: :gin
    t.index ["user_id"], name: "index_user_actions_on_user_id"
  end

  create_table "user_filters", force: :cascade do |t|
    t.jsonb "parameters"
    t.string "name"
    t.integer "chapter_id"
    t.integer "user_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.boolean "archived"
    t.integer "scope_id"
    t.string "scope_type"
    t.integer "version", default: 2
    t.index ["scope_id", "scope_type"], name: "index_user_filters_on_scope_id_and_scope_type"
  end

  create_table "user_message_link_clicks", force: :cascade do |t|
    t.integer "message_resource_id"
    t.string "message_resource_type"
    t.integer "user_id"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_user_message_link_clicks_on_user_id"
  end

  create_table "user_notes", force: :cascade do |t|
    t.integer "agent_id"
    t.integer "user_id"
    t.text "content"
    t.integer "last_edited_by_user_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "user_property_edits", force: :cascade do |t|
    t.integer "user_id"
    t.integer "agent_id"
    t.string "field_type"
    t.string "old_value"
    t.string "new_value"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "data_import_id"
    t.index ["agent_id"], name: "index_user_property_edits_on_agent_id"
    t.index ["user_id"], name: "index_user_property_edits_on_user_id"
  end

  create_table "user_role_scopes", force: :cascade do |t|
    t.integer "user_id"
    t.integer "role_id"
    t.string "scope_type"
    t.integer "scope_id"
    t.string "logged_in_as_type"
    t.integer "logged_in_as_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.date "last_app_activity_at"
    t.string "phone_number"
    t.boolean "phone_number_verified", default: false
    t.string "email"
    t.boolean "email_verified", default: false
    t.integer "solidarity_user_id"
    t.text "sms_invitation_token"
    t.text "email_invitation_token"
    t.datetime "sms_invitation_token_sent_at"
    t.datetime "email_invitation_token_sent_at"
    t.index ["logged_in_as_id", "logged_in_as_type"], name: "index_user_role_scopes_on_logged_in_as_id_and_logged_in_as_type"
    t.index ["role_id"], name: "index_user_role_scopes_on_role_id"
    t.index ["scope_id", "scope_type"], name: "index_user_role_scopes_on_scope_id_and_scope_type"
    t.index ["user_id"], name: "index_user_role_scopes_on_user_id", unique: true
  end

  create_table "user_tags", force: :cascade do |t|
    t.string "name"
    t.integer "user_id"
    t.integer "root_organization_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["name"], name: "index_user_tags_on_name"
  end

  create_table "user_votes", force: :cascade do |t|
    t.boolean "vote_value"
    t.integer "user_id"
    t.integer "proposed_message_id"
    t.string "vote_reason"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "voteable_id"
    t.string "voteable_type"
    t.string "vote_value_array", default: [], array: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "encrypted_password"
    t.string "first_name"
    t.string "last_name"
    t.string "phone_number"
    t.string "zip_code"
    t.integer "chapter_id"
    t.string "access_level"
    t.string "services", array: true
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at", precision: nil
    t.datetime "remember_created_at", precision: nil
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at", precision: nil
    t.datetime "last_sign_in_at", precision: nil
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at", precision: nil
    t.datetime "confirmation_sent_at", precision: nil
    t.string "unconfirmed_email"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.boolean "phone_number_verified"
    t.boolean "has_given_phone_number_consent", default: false
    t.string "created_by_method"
    t.string "driver_work_frequency"
    t.string "account_type", default: "driver"
    t.integer "added_by_user_id"
    t.string "hash_id"
    t.boolean "admin"
    t.string "username"
    t.boolean "organizer_deactivated"
    t.string "display_name"
    t.integer "failed_message_delivery_count"
    t.integer "sign_up_visit_id"
    t.hstore "twilio_carrier"
    t.string "preferred_language"
    t.string "languages", default: [], array: true
    t.integer "referred_by_id"
    t.string "referral_code"
    t.boolean "is_active", default: true
    t.string "opted_out_of", default: [], array: true
    t.datetime "last_activity_date", precision: nil
    t.boolean "has_set_password"
    t.string "classification"
    t.string "authentication_token", limit: 64
    t.string "second_language"
    t.integer "chapter_phone_number_id"
    t.geography "lonlat", limit: {:srid=>4326, :type=>"st_point", :geographic=>true}
    t.jsonb "custom_attrs", default: "{}", null: false
    t.integer "branch_id"
    t.boolean "email_permission"
    t.boolean "sms_permission"
    t.jsonb "properties", default: {}, null: false
    t.integer "created_through_action_page_id"
    t.string "address1"
    t.string "address2"
    t.string "city"
    t.string "state"
    t.string "country"
    t.boolean "call_permission"
    t.boolean "peer_to_peer_sms_permission"
    t.integer "role_id"
    t.integer "user_role_scope_id"
    t.integer "root_organization_id"
    t.integer "failed_attempts", default: 0, null: false
    t.datetime "locked_at", precision: nil
    t.integer "second_factor_attempts_count", default: 0
    t.string "encrypted_otp_secret_key"
    t.string "encrypted_otp_secret_key_iv"
    t.string "encrypted_otp_secret_key_salt"
    t.string "direct_otp"
    t.datetime "direct_otp_sent_at", precision: nil
    t.datetime "totp_timestamp", precision: nil
    t.jsonb "pn_settings", default: {}, null: false
    t.string "tags", default: [], array: true
    t.string "timezone"
    t.datetime "paid_dues_expires_at", precision: nil
    t.integer "data_import_id"
    t.index ["account_type"], name: "index_users_on_account_type"
    t.index ["authentication_token"], name: "index_users_on_authentication_token", unique: true
    t.index ["branch_id"], name: "index_users_on_branch_id"
    t.index ["call_permission"], name: "index_users_on_call_permission"
    t.index ["chapter_id"], name: "index_users_on_chapter_id"
    t.index ["chapter_phone_number_id"], name: "index_users_on_chapter_phone_number_id"
    t.index ["classification"], name: "index_users_on_classification"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["created_at"], name: "index_users_on_created_at"
    t.index ["data_import_id"], name: "index_users_on_data_import_id"
    t.index ["email"], name: "index_users_on_email"
    t.index ["email_permission"], name: "index_users_on_email_permission"
    t.index ["encrypted_otp_secret_key"], name: "index_users_on_encrypted_otp_secret_key", unique: true
    t.index ["hash_id"], name: "index_users_on_hash_id"
    t.index ["is_active"], name: "index_users_on_is_active"
    t.index ["lonlat"], name: "index_users_on_lonlat", using: :gist
    t.index ["peer_to_peer_sms_permission"], name: "index_users_on_peer_to_peer_sms_permission"
    t.index ["phone_number"], name: "index_users_on_phone_number"
    t.index ["preferred_language"], name: "index_users_on_preferred_language"
    t.index ["properties"], name: "index_users_on_properties", using: :gin
    t.index ["referral_code"], name: "index_users_on_referral_code"
    t.index ["referred_by_id"], name: "index_users_on_referred_by_id"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["root_organization_id"], name: "index_users_on_root_organization_id"
    t.index ["sms_permission"], name: "index_users_on_sms_permission"
    t.index ["username"], name: "index_users_on_username"
  end

  create_table "versions", force: :cascade do |t|
    t.string "item_type", null: false
    t.bigint "item_id", null: false
    t.string "event", null: false
    t.string "whodunnit"
    t.text "object"
    t.datetime "created_at"
    t.index ["item_type", "item_id"], name: "index_versions_on_item_type_and_item_id"
  end

  create_table "visits", force: :cascade do |t|
    t.string "visit_token"
    t.string "visitor_token"
    t.string "ip"
    t.text "user_agent"
    t.text "referrer"
    t.text "landing_page"
    t.integer "user_id"
    t.string "referring_domain"
    t.string "search_keyword"
    t.string "browser"
    t.string "os"
    t.string "device_type"
    t.integer "screen_height"
    t.integer "screen_width"
    t.string "country"
    t.string "region"
    t.string "city"
    t.string "postal_code"
    t.decimal "latitude"
    t.decimal "longitude"
    t.string "utm_source"
    t.string "utm_medium"
    t.string "utm_term"
    t.string "utm_content"
    t.string "utm_campaign"
    t.datetime "started_at", precision: nil
    t.integer "root_organization_id"
    t.integer "action_page_id"
    t.index ["action_page_id"], name: "index_visits_on_action_page_id"
    t.index ["device_type"], name: "index_visits_on_device_type"
    t.index ["user_id"], name: "index_visits_on_user_id"
    t.index ["utm_source"], name: "index_visits_on_utm_source"
    t.index ["visit_token"], name: "index_visits_on_visit_token", unique: true
  end

  create_table "volunteer_availabilities", force: :cascade do |t|
    t.integer "monday_availability", default: [], array: true
    t.integer "tuesday_availability", default: [], array: true
    t.integer "wednesday_availability", default: [], array: true
    t.integer "thursday_availability", default: [], array: true
    t.integer "friday_availability", default: [], array: true
    t.integer "saturday_availability", default: [], array: true
    t.integer "sunday_availability", default: [], array: true
    t.integer "user_id"
    t.string "calendar_type"
    t.integer "chapter_id"
    t.integer "hours_in_advance", default: 3
    t.text "access_token"
    t.text "refresh_token"
    t.datetime "access_time_expires_at", precision: nil
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "max_calls_per_day", default: 3
    t.integer "max_calls_per_week", default: 18
    t.text "welcome_message"
    t.boolean "is_active"
    t.integer "trained_by_user_id"
    t.integer "consecutive_failed_auth_attempts", default: 0
    t.string "reconnect_calendar_token"
    t.integer "zoom_account_id"
  end

  create_table "volunteer_offers", force: :cascade do |t|
    t.integer "user_id"
    t.text "work_type", default: [], array: true
    t.text "other_comment"
    t.string "best_time_to_call"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "chapter_id"
    t.datetime "contacted_at", precision: nil
    t.boolean "did_contact"
    t.boolean "saved_by_agent"
  end

  create_table "web_push_tokens", force: :cascade do |t|
    t.text "keys_p256dh"
    t.text "keys_auth"
    t.integer "user_id"
    t.string "device"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.text "endpoint"
    t.string "created_from"
    t.integer "solidarity_user_id"
  end

  create_table "website_domains", force: :cascade do |t|
    t.string "domain_type"
    t.integer "website_id"
    t.string "host"
    t.boolean "verified", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["host"], name: "index_website_domains_on_host"
    t.index ["verified"], name: "index_website_domains_on_verified"
    t.index ["website_id"], name: "index_website_domains_on_website_id"
  end

  create_table "websites", force: :cascade do |t|
    t.string "name"
    t.jsonb "navigation", default: {}
    t.jsonb "settings", default: {}
    t.jsonb "metadata", default: {}
    t.integer "scope_id"
    t.string "scope_type"
    t.integer "domain_id"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.integer "home_page_id"
    t.integer "primary_nav_menu_bar_id"
    t.integer "secondary_nav_menu_bar_id"
    t.integer "footer_menu_bar_id"
    t.jsonb "announcement_banner", default: {}
    t.string "url_slug"
    t.index ["scope_id", "scope_type"], name: "index_websites_on_scope_id_and_scope_type"
    t.index ["url_slug"], name: "index_websites_on_url_slug"
  end

  create_table "zipcodes", force: :cascade do |t|
    t.string "code"
    t.string "city"
    t.integer "state_id"
    t.integer "county_id"
    t.string "area_code"
    t.decimal "lat", precision: 15, scale: 10
    t.decimal "lon", precision: 15, scale: 10
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
    t.index ["code"], name: "index_zipcodes_on_code"
    t.index ["county_id"], name: "index_zipcodes_on_county_id"
    t.index ["lat", "lon"], name: "index_zipcodes_on_lat_and_lon"
    t.index ["state_id"], name: "index_zipcodes_on_state_id"
  end

  create_table "zoom_accounts", force: :cascade do |t|
    t.jsonb "account_data"
    t.string "code"
    t.text "access_token"
    t.datetime "access_token_expires_at", precision: nil
    t.text "refresh_token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.index ["user_id"], name: "index_zoom_accounts_on_user_id"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "automation_enrollments", "automation_steps", column: "current_step_id"
  add_foreign_key "automation_enrollments", "automations"
  add_foreign_key "automation_enrollments", "users"
  add_foreign_key "automation_executions", "automation_enrollments"
  add_foreign_key "automation_executions", "users"
  add_foreign_key "automation_steps", "automation_steps", column: "parent_id"
  add_foreign_key "automation_steps", "automations"
  add_foreign_key "thredded_messageboard_users", "thredded_messageboards", on_delete: :cascade
  add_foreign_key "thredded_messageboard_users", "thredded_user_details", on_delete: :cascade
  add_foreign_key "thredded_user_post_notifications", "thredded_posts", column: "post_id", on_delete: :cascade
  add_foreign_key "thredded_user_post_notifications", "users", on_delete: :cascade
end
