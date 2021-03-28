create table products
(
    id          serial not null
        constraint products_pk
            primary key,
    name        varchar(200),
    description varchar(400),
    image_src   varchar(400)
);

comment on table products is 'product details';

alter table products
    owner to postgres;

create unique index products_id_uindex
    on products (id);

