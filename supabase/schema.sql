create table if not exists public.module_access (
  id integer primary key check (id = 1),
  unlocked_until_week integer not null default 0
    check (unlocked_until_week between 0 and 8),
  unlocked_module_ids integer[] not null default '{}'
);

insert into public.module_access (id, unlocked_until_week, unlocked_module_ids)
values (1, 0, '{}')
on conflict (id) do nothing;

alter table public.module_access enable row level security;

revoke all on table public.module_access from anon, authenticated;
grant select, insert, update on table public.module_access to service_role;
