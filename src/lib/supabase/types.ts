// AVOID UPDATING THIS FILE DIRECTLY. It is automatically generated.
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: '14.17'
  }
  public: {
    Tables: {
      agents: {
        Row: {
          business_id: string
          created_at: string
          email: string
          id: string
          is_online: boolean
          last_seen_at: string | null
          name: string
          role: string
        }
        Insert: {
          business_id: string
          created_at?: string
          email: string
          id?: string
          is_online?: boolean
          last_seen_at?: string | null
          name: string
          role?: string
        }
        Update: {
          business_id?: string
          created_at?: string
          email?: string
          id?: string
          is_online?: boolean
          last_seen_at?: string | null
          name?: string
          role?: string
        }
        Relationships: [
          {
            foreignKeyName: 'agents_business_id_fkey'
            columns: ['business_id']
            isOneToOne: false
            referencedRelation: 'businesses'
            referencedColumns: ['id']
          },
        ]
      }
      businesses: {
        Row: {
          ai_config: Json
          created_at: string
          id: string
          name: string
          updated_at: string
          whatsapp_phone_number_id: string
        }
        Insert: {
          ai_config?: Json
          created_at?: string
          id?: string
          name: string
          updated_at?: string
          whatsapp_phone_number_id: string
        }
        Update: {
          ai_config?: Json
          created_at?: string
          id?: string
          name?: string
          updated_at?: string
          whatsapp_phone_number_id?: string
        }
        Relationships: []
      }
      cases: {
        Row: {
          ai_suggestion_1: string | null
          ai_suggestion_2: string | null
          ai_suggestion_3: string | null
          assigned_agent_id: string | null
          business_id: string
          channel_account_id: string | null
          conversation_id: string
          created_at: string
          description: string | null
          id: string
          priority: string
          resolved_at: string | null
          source: string
          status: string
          subject: string
          updated_at: string
        }
        Insert: {
          ai_suggestion_1?: string | null
          ai_suggestion_2?: string | null
          ai_suggestion_3?: string | null
          assigned_agent_id?: string | null
          business_id: string
          channel_account_id?: string | null
          conversation_id: string
          created_at?: string
          description?: string | null
          id?: string
          priority?: string
          resolved_at?: string | null
          source?: string
          status?: string
          subject?: string
          updated_at?: string
        }
        Update: {
          ai_suggestion_1?: string | null
          ai_suggestion_2?: string | null
          ai_suggestion_3?: string | null
          assigned_agent_id?: string | null
          business_id?: string
          channel_account_id?: string | null
          conversation_id?: string
          created_at?: string
          description?: string | null
          id?: string
          priority?: string
          resolved_at?: string | null
          source?: string
          status?: string
          subject?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'cases_assigned_agent_id_fkey'
            columns: ['assigned_agent_id']
            isOneToOne: false
            referencedRelation: 'agents'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'cases_business_id_fkey'
            columns: ['business_id']
            isOneToOne: false
            referencedRelation: 'businesses'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'cases_conversation_id_business_id_channel_account_id_fkey'
            columns: ['conversation_id', 'business_id', 'channel_account_id']
            isOneToOne: false
            referencedRelation: 'conversations'
            referencedColumns: ['id', 'business_id', 'channel_account_id']
          },
          {
            foreignKeyName: 'cases_conversation_id_fkey'
            columns: ['conversation_id']
            isOneToOne: false
            referencedRelation: 'conversations'
            referencedColumns: ['id']
          },
        ]
      }
      contacts: {
        Row: {
          avatar_url: string | null
          business_id: string
          channel_account_id: string | null
          created_at: string
          email: string | null
          id: string
          last_message_at: string | null
          name: string | null
          notes: string | null
          phone: string | null
          tags: Json
          title: string | null
          updated_at: string
          wa_id: string
        }
        Insert: {
          avatar_url?: string | null
          business_id: string
          channel_account_id?: string | null
          created_at?: string
          email?: string | null
          id?: string
          last_message_at?: string | null
          name?: string | null
          notes?: string | null
          phone?: string | null
          tags?: Json
          title?: string | null
          updated_at?: string
          wa_id: string
        }
        Update: {
          avatar_url?: string | null
          business_id?: string
          channel_account_id?: string | null
          created_at?: string
          email?: string | null
          id?: string
          last_message_at?: string | null
          name?: string | null
          notes?: string | null
          phone?: string | null
          tags?: Json
          title?: string | null
          updated_at?: string
          wa_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'contacts_business_id_fkey'
            columns: ['business_id']
            isOneToOne: false
            referencedRelation: 'businesses'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'contacts_channel_account_id_business_id_fkey'
            columns: ['channel_account_id', 'business_id']
            isOneToOne: false
            referencedRelation: 'support_channels'
            referencedColumns: ['id', 'business_id']
          },
        ]
      }
      conversations: {
        Row: {
          ai_active: boolean
          assigned_agent_id: string | null
          business_id: string
          channel_account_id: string | null
          created_at: string
          customer_name: string | null
          human_active: boolean
          id: string
          last_human_reply_at: string | null
          last_message_at: string | null
          last_message_text: string | null
          last_message_type: string
          status: string
          unread_count: number
          updated_at: string
          wa_id: string
        }
        Insert: {
          ai_active?: boolean
          assigned_agent_id?: string | null
          business_id: string
          channel_account_id?: string | null
          created_at?: string
          customer_name?: string | null
          human_active?: boolean
          id?: string
          last_human_reply_at?: string | null
          last_message_at?: string | null
          last_message_text?: string | null
          last_message_type?: string
          status?: string
          unread_count?: number
          updated_at?: string
          wa_id: string
        }
        Update: {
          ai_active?: boolean
          assigned_agent_id?: string | null
          business_id?: string
          channel_account_id?: string | null
          created_at?: string
          customer_name?: string | null
          human_active?: boolean
          id?: string
          last_human_reply_at?: string | null
          last_message_at?: string | null
          last_message_text?: string | null
          last_message_type?: string
          status?: string
          unread_count?: number
          updated_at?: string
          wa_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'conversations_assigned_agent_id_fkey'
            columns: ['assigned_agent_id']
            isOneToOne: false
            referencedRelation: 'agents'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'conversations_business_id_fkey'
            columns: ['business_id']
            isOneToOne: false
            referencedRelation: 'businesses'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'conversations_channel_account_id_business_id_fkey'
            columns: ['channel_account_id', 'business_id']
            isOneToOne: false
            referencedRelation: 'support_channels'
            referencedColumns: ['id', 'business_id']
          },
        ]
      }
      internal_notes: {
        Row: {
          agent_id: string
          content: string
          conversation_id: string
          created_at: string
          id: string
        }
        Insert: {
          agent_id: string
          content: string
          conversation_id: string
          created_at?: string
          id?: string
        }
        Update: {
          agent_id?: string
          content?: string
          conversation_id?: string
          created_at?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'internal_notes_agent_id_fkey'
            columns: ['agent_id']
            isOneToOne: false
            referencedRelation: 'agents'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'internal_notes_conversation_id_fkey'
            columns: ['conversation_id']
            isOneToOne: false
            referencedRelation: 'conversations'
            referencedColumns: ['id']
          },
        ]
      }
      message_status_events: {
        Row: {
          event_key: string
          event_type: string
          id: string
          message_id: string
          occurred_at: string
          raw_payload: Json | null
          reaction_emoji: string | null
        }
        Insert: {
          event_key: string
          event_type: string
          id?: string
          message_id: string
          occurred_at: string
          raw_payload?: Json | null
          reaction_emoji?: string | null
        }
        Update: {
          event_key?: string
          event_type?: string
          id?: string
          message_id?: string
          occurred_at?: string
          raw_payload?: Json | null
          reaction_emoji?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'message_status_events_message_id_fkey'
            columns: ['message_id']
            isOneToOne: false
            referencedRelation: 'messages'
            referencedColumns: ['id']
          },
        ]
      }
      messages: {
        Row: {
          agent_id: string | null
          ai_context: string | null
          business_id: string
          channel_account_id: string | null
          content: string | null
          content_expired_at: string | null
          content_hash: string | null
          conversation_id: string
          created_at: string
          direction: string
          id: string
          media_id: string | null
          media_mime_type: string | null
          media_path: string | null
          media_size_bytes: number | null
          metadata: Json
          sent_by: string | null
          status: string
          transcript: string | null
          type: string
          updated_at: string
          wa_message_id: string | null
        }
        Insert: {
          agent_id?: string | null
          ai_context?: string | null
          business_id: string
          channel_account_id?: string | null
          content?: string | null
          content_expired_at?: string | null
          content_hash?: string | null
          conversation_id: string
          created_at?: string
          direction: string
          id?: string
          media_id?: string | null
          media_mime_type?: string | null
          media_path?: string | null
          media_size_bytes?: number | null
          metadata?: Json
          sent_by?: string | null
          status?: string
          transcript?: string | null
          type?: string
          updated_at?: string
          wa_message_id?: string | null
        }
        Update: {
          agent_id?: string | null
          ai_context?: string | null
          business_id?: string
          channel_account_id?: string | null
          content?: string | null
          content_expired_at?: string | null
          content_hash?: string | null
          conversation_id?: string
          created_at?: string
          direction?: string
          id?: string
          media_id?: string | null
          media_mime_type?: string | null
          media_path?: string | null
          media_size_bytes?: number | null
          metadata?: Json
          sent_by?: string | null
          status?: string
          transcript?: string | null
          type?: string
          updated_at?: string
          wa_message_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'messages_agent_id_fkey'
            columns: ['agent_id']
            isOneToOne: false
            referencedRelation: 'agents'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'messages_business_id_fkey'
            columns: ['business_id']
            isOneToOne: false
            referencedRelation: 'businesses'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'messages_conversation_id_business_id_channel_account_id_fkey'
            columns: ['conversation_id', 'business_id', 'channel_account_id']
            isOneToOne: false
            referencedRelation: 'conversations'
            referencedColumns: ['id', 'business_id', 'channel_account_id']
          },
          {
            foreignKeyName: 'messages_conversation_id_fkey'
            columns: ['conversation_id']
            isOneToOne: false
            referencedRelation: 'conversations'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'messages_media_id_business_id_channel_account_id_fkey'
            columns: ['media_id', 'business_id', 'channel_account_id']
            isOneToOne: false
            referencedRelation: 'support_media'
            referencedColumns: ['id', 'business_id', 'channel_account_id']
          },
        ]
      }
      support_agent_identities: {
        Row: {
          agent_id: string
          business_id: string
          issuer: string
          sub: string
          tenant_id: string
        }
        Insert: {
          agent_id: string
          business_id: string
          issuer: string
          sub: string
          tenant_id: string
        }
        Update: {
          agent_id?: string
          business_id?: string
          issuer?: string
          sub?: string
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'support_agent_identities_agent_id_business_id_fkey'
            columns: ['agent_id', 'business_id']
            isOneToOne: false
            referencedRelation: 'agents'
            referencedColumns: ['id', 'business_id']
          },
          {
            foreignKeyName: 'support_agent_identities_tenant_id_business_id_fkey'
            columns: ['tenant_id', 'business_id']
            isOneToOne: false
            referencedRelation: 'support_tenants'
            referencedColumns: ['tenant_id', 'business_id']
          },
        ]
      }
      support_automation_receipts: {
        Row: {
          claim_token: string
          command_id: string | null
          completed_at: string | null
          consumer: string
          event_id: string
          lease_expires_at: string
          message_id: string | null
          outcome: string | null
        }
        Insert: {
          claim_token?: string
          command_id?: string | null
          completed_at?: string | null
          consumer: string
          event_id: string
          lease_expires_at?: string
          message_id?: string | null
          outcome?: string | null
        }
        Update: {
          claim_token?: string
          command_id?: string | null
          completed_at?: string | null
          consumer?: string
          event_id?: string
          lease_expires_at?: string
          message_id?: string | null
          outcome?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'support_automation_receipts_event_id_fkey'
            columns: ['event_id']
            isOneToOne: false
            referencedRelation: 'support_events'
            referencedColumns: ['event_id']
          },
        ]
      }
      support_channels: {
        Row: {
          active: boolean
          business_id: string
          id: string
          provider_phone_number_id: string
          tenant_id: string
        }
        Insert: {
          active?: boolean
          business_id: string
          id: string
          provider_phone_number_id: string
          tenant_id: string
        }
        Update: {
          active?: boolean
          business_id?: string
          id?: string
          provider_phone_number_id?: string
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'support_channels_tenant_id_business_id_fkey'
            columns: ['tenant_id', 'business_id']
            isOneToOne: false
            referencedRelation: 'support_tenants'
            referencedColumns: ['tenant_id', 'business_id']
          },
        ]
      }
      support_command_receipts: {
        Row: {
          channel_account_id: string
          content_expired_at: string | null
          created_at: string
          idempotency_key: string
          request: Json
          request_hash: string | null
          response: Json
          tenant_id: string
        }
        Insert: {
          channel_account_id: string
          content_expired_at?: string | null
          created_at?: string
          idempotency_key: string
          request: Json
          request_hash?: string | null
          response: Json
          tenant_id: string
        }
        Update: {
          channel_account_id?: string
          content_expired_at?: string | null
          created_at?: string
          idempotency_key?: string
          request?: Json
          request_hash?: string | null
          response?: Json
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'support_command_receipts_tenant_id_channel_account_id_fkey'
            columns: ['tenant_id', 'channel_account_id']
            isOneToOne: false
            referencedRelation: 'support_channels'
            referencedColumns: ['tenant_id', 'id']
          },
        ]
      }
      support_contact_identities: {
        Row: {
          business_id: string
          channel_account_id: string
          contact_id: string
          provider_user_id: string
          tenant_id: string
        }
        Insert: {
          business_id: string
          channel_account_id: string
          contact_id: string
          provider_user_id: string
          tenant_id: string
        }
        Update: {
          business_id?: string
          channel_account_id?: string
          contact_id?: string
          provider_user_id?: string
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'support_contact_identities_contact_id_business_id_channel__fkey'
            columns: ['contact_id', 'business_id', 'channel_account_id']
            isOneToOne: false
            referencedRelation: 'contacts'
            referencedColumns: ['id', 'business_id', 'channel_account_id']
          },
          {
            foreignKeyName: 'support_contact_identities_tenant_id_business_id_fkey'
            columns: ['tenant_id', 'business_id']
            isOneToOne: false
            referencedRelation: 'support_tenants'
            referencedColumns: ['tenant_id', 'business_id']
          },
        ]
      }
      support_event_acks: {
        Row: {
          acknowledged_at: string
          consumer: string
          event_id: string
        }
        Insert: {
          acknowledged_at?: string
          consumer: string
          event_id: string
        }
        Update: {
          acknowledged_at?: string
          consumer?: string
          event_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'support_event_acks_event_id_fkey'
            columns: ['event_id']
            isOneToOne: false
            referencedRelation: 'support_events'
            referencedColumns: ['event_id']
          },
        ]
      }
      support_events: {
        Row: {
          business_id: string
          channel_account_id: string
          content_expired_at: string | null
          conversation_id: string | null
          correlation_id: string
          data: Json
          event_id: string
          input: Json | null
          input_hash: string | null
          message_id: string | null
          occurred_at: string
          provider_message_id: string | null
          sequence: number
          tenant_id: string
          type: string
          version: number
        }
        Insert: {
          business_id: string
          channel_account_id: string
          content_expired_at?: string | null
          conversation_id?: string | null
          correlation_id: string
          data?: Json
          event_id?: string
          input?: Json | null
          input_hash?: string | null
          message_id?: string | null
          occurred_at: string
          provider_message_id?: string | null
          sequence?: never
          tenant_id: string
          type: string
          version?: number
        }
        Update: {
          business_id?: string
          channel_account_id?: string
          content_expired_at?: string | null
          conversation_id?: string | null
          correlation_id?: string
          data?: Json
          event_id?: string
          input?: Json | null
          input_hash?: string | null
          message_id?: string | null
          occurred_at?: string
          provider_message_id?: string | null
          sequence?: never
          tenant_id?: string
          type?: string
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: 'support_events_channel_account_id_business_id_fkey'
            columns: ['channel_account_id', 'business_id']
            isOneToOne: false
            referencedRelation: 'support_channels'
            referencedColumns: ['id', 'business_id']
          },
          {
            foreignKeyName: 'support_events_conversation_id_business_id_channel_account_fkey'
            columns: ['conversation_id', 'business_id', 'channel_account_id']
            isOneToOne: false
            referencedRelation: 'conversations'
            referencedColumns: ['id', 'business_id', 'channel_account_id']
          },
          {
            foreignKeyName: 'support_events_message_id_business_id_channel_account_id_fkey'
            columns: ['message_id', 'business_id', 'channel_account_id']
            isOneToOne: false
            referencedRelation: 'messages'
            referencedColumns: ['id', 'business_id', 'channel_account_id']
          },
          {
            foreignKeyName: 'support_events_tenant_id_business_id_fkey'
            columns: ['tenant_id', 'business_id']
            isOneToOne: false
            referencedRelation: 'support_tenants'
            referencedColumns: ['tenant_id', 'business_id']
          },
        ]
      }
      support_media: {
        Row: {
          business_id: string
          channel_account_id: string
          conversation_id: string | null
          created_at: string
          filename: string
          id: string
          mime_type: string
          size_bytes: number
          state: string
          storage_path: string
          tenant_id: string
        }
        Insert: {
          business_id: string
          channel_account_id: string
          conversation_id?: string | null
          created_at?: string
          filename: string
          id?: string
          mime_type: string
          size_bytes: number
          state?: string
          storage_path: string
          tenant_id: string
        }
        Update: {
          business_id?: string
          channel_account_id?: string
          conversation_id?: string | null
          created_at?: string
          filename?: string
          id?: string
          mime_type?: string
          size_bytes?: number
          state?: string
          storage_path?: string
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'support_media_channel_account_id_business_id_fkey'
            columns: ['channel_account_id', 'business_id']
            isOneToOne: false
            referencedRelation: 'support_channels'
            referencedColumns: ['id', 'business_id']
          },
          {
            foreignKeyName: 'support_media_conversation_id_business_id_channel_account__fkey'
            columns: ['conversation_id', 'business_id', 'channel_account_id']
            isOneToOne: false
            referencedRelation: 'conversations'
            referencedColumns: ['id', 'business_id', 'channel_account_id']
          },
          {
            foreignKeyName: 'support_media_tenant_id_business_id_fkey'
            columns: ['tenant_id', 'business_id']
            isOneToOne: false
            referencedRelation: 'support_tenants'
            referencedColumns: ['tenant_id', 'business_id']
          },
        ]
      }
      support_media_deletions: {
        Row: {
          attempts: number
          business_id: string
          channel_account_id: string
          retry_at: string
          storage_path: string
          tenant_id: string
        }
        Insert: {
          attempts?: number
          business_id: string
          channel_account_id: string
          retry_at?: string
          storage_path: string
          tenant_id: string
        }
        Update: {
          attempts?: number
          business_id?: string
          channel_account_id?: string
          retry_at?: string
          storage_path?: string
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'support_media_deletions_channel_account_id_business_id_fkey'
            columns: ['channel_account_id', 'business_id']
            isOneToOne: false
            referencedRelation: 'support_channels'
            referencedColumns: ['id', 'business_id']
          },
          {
            foreignKeyName: 'support_media_deletions_tenant_id_business_id_fkey'
            columns: ['tenant_id', 'business_id']
            isOneToOne: false
            referencedRelation: 'support_tenants'
            referencedColumns: ['tenant_id', 'business_id']
          },
        ]
      }
      support_outbox: {
        Row: {
          actor: string
          automation_key_id: string | null
          business_id: string
          channel_account_id: string
          claim_token: string | null
          claimed_at: string | null
          command_id: string
          completed_at: string | null
          content_expired_at: string | null
          conversation_id: string
          created_at: string
          idempotency_key: string
          message_id: string
          request: Json
          request_hash: string | null
          result: Json | null
          status: string
          tenant_id: string
        }
        Insert: {
          actor: string
          automation_key_id?: string | null
          business_id: string
          channel_account_id: string
          claim_token?: string | null
          claimed_at?: string | null
          command_id?: string
          completed_at?: string | null
          content_expired_at?: string | null
          conversation_id: string
          created_at?: string
          idempotency_key: string
          message_id: string
          request: Json
          request_hash?: string | null
          result?: Json | null
          status?: string
          tenant_id: string
        }
        Update: {
          actor?: string
          automation_key_id?: string | null
          business_id?: string
          channel_account_id?: string
          claim_token?: string | null
          claimed_at?: string | null
          command_id?: string
          completed_at?: string | null
          content_expired_at?: string | null
          conversation_id?: string
          created_at?: string
          idempotency_key?: string
          message_id?: string
          request?: Json
          request_hash?: string | null
          result?: Json | null
          status?: string
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'support_outbox_conversation_id_business_id_channel_account_fkey'
            columns: ['conversation_id', 'business_id', 'channel_account_id']
            isOneToOne: false
            referencedRelation: 'conversations'
            referencedColumns: ['id', 'business_id', 'channel_account_id']
          },
          {
            foreignKeyName: 'support_outbox_message_id_business_id_channel_account_id_fkey'
            columns: ['message_id', 'business_id', 'channel_account_id']
            isOneToOne: false
            referencedRelation: 'messages'
            referencedColumns: ['id', 'business_id', 'channel_account_id']
          },
          {
            foreignKeyName: 'support_outbox_tenant_id_business_id_fkey'
            columns: ['tenant_id', 'business_id']
            isOneToOne: false
            referencedRelation: 'support_tenants'
            referencedColumns: ['tenant_id', 'business_id']
          },
        ]
      }
      support_tenants: {
        Row: {
          business_id: string
          created_at: string
          retention_consumers: string[]
          retention_hours: number
          tenant_id: string
        }
        Insert: {
          business_id: string
          created_at?: string
          retention_consumers?: string[]
          retention_hours?: number
          tenant_id: string
        }
        Update: {
          business_id?: string
          created_at?: string
          retention_consumers?: string[]
          retention_hours?: number
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'support_tenants_business_id_fkey'
            columns: ['business_id']
            isOneToOne: true
            referencedRelation: 'businesses'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      increment_conversation_unread: {
        Args: { conv_id: string }
        Returns: undefined
      }
      support_ack_events: { Args: { p: Json }; Returns: Json }
      support_agent: { Args: { p: Json }; Returns: string }
      support_automation_claim: { Args: { p: Json }; Returns: Json }
      support_automation_complete: { Args: { p: Json }; Returns: Json }
      support_automation_status: { Args: { p: Json }; Returns: Json }
      support_claim: { Args: { p: Json }; Returns: Json }
      support_get_event: { Args: { p: Json }; Returns: Json }
      support_ingest_event: { Args: { p: Json }; Returns: Json }
      support_map_tenant: { Args: { p: Json }; Returns: Json }
      support_pending_events: { Args: { p: Json }; Returns: Json }
      support_pending_outbox: { Args: { p: Json }; Returns: Json }
      support_result: { Args: { p: Json }; Returns: Json }
      support_retention_configure: { Args: { p: Json }; Returns: Json }
      support_retention_run: { Args: { p: Json }; Returns: Json }
      support_retention_storage_result: { Args: { p: Json }; Returns: Json }
      support_send: { Args: { p: Json }; Returns: Json }
      support_transition: { Args: { p: Json }; Returns: Json }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, 'public'>]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] &
        DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] &
        DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema['Enums']
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
