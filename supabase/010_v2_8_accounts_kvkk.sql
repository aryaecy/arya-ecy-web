-- ARYA Akademi V2.8.0 - login code mapping and KVKK evidence
create extension if not exists pgcrypto;

create table if not exists public.academy_login_codes (
  code text primary key,
  auth_email text not null unique,
  account_type text not null check (account_type in ('company','participant')),
  company_id text,
  participant_ref text,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.kvkk_consent_evidence (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  company_id text,
  notice_version text not null,
  explicit_consent boolean not null default false,
  accepted_at timestamptz not null default now(),
  ip_address text,
  user_agent text,
  request_id text,
  channel text not null default 'supabase-edge-function',
  evidence_hash text not null,
  created_at timestamptz not null default now()
);

alter table public.academy_login_codes enable row level security;
alter table public.kvkk_consent_evidence enable row level security;

-- Direct client reads are intentionally denied. Edge Functions use service role.
