import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, MenuItem } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { IPhone, PhoneTypeEnum } from '@cellebrite/data';
import moment from 'moment';
import { useStyles } from './phone-details.styles';

/* eslint-disable-next-line */
export interface PhoneDetailsProps {
  view: 'add' | 'edit';
  data: Partial<IPhone> | undefined;
  onSubmit: (data: Partial<IPhone>) => void;
}

function isJSON(str) {
  try {
    return JSON.parse(str) && !!str;
  } catch (e) {
    return false;
  }
}

export function PhoneDetails({
  view,
  data = {} as IPhone,
  onSubmit,
}: PhoneDetailsProps) {
  const classes = useStyles();
  const { id, type, color, serial, metadata, createdAt, updatedAt } = data;
  return (
    <Formik
      initialValues={{
        id,
        type,
        color,
        serial,
        metadata,
        createdAt: moment(createdAt as Date).format('DD-MM-YYYY, H:mm:s'),
        updatedAt: moment(updatedAt as Date).format('DD-MM-YYYY, H:mm:s'),
      }}
      validate={(values) => {
        const errors: Partial<IPhone> = {};
        if (!values.type) {
          errors.type = 'Required';
        }
        if (!values.color) {
          errors.color = 'Required';
        }
        if (!values.serial) {
          errors.serial = 'Required';
        }
        if (!values.metadata) {
          errors.metadata = 'Required';
        } else if (!isJSON(values.metadata)) {
          errors.metadata = 'Not a valid JSON';
        }
        return errors;
      }}
      onSubmit={async (
        { createdAt, updatedAt, ...values },
        { setSubmitting, resetForm }
      ) => {
        await onSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          {view === 'edit' && (
            <div>
              <Field
                component={TextField}
                name="id"
                type="text"
                label="ID"
                key="id"
                disabled
                className={classes.input}
              />
            </div>
          )}
          {view === 'edit' && (
            <div>
              <Field
                component={TextField}
                name="createdAt"
                type="text"
                label="Created At"
                key="createdAt"
                disabled
                className={classes.input}
              />
            </div>
          )}
          {view === 'edit' && (
            <div>
              <Field
                component={TextField}
                name="updatedAt"
                type="text"
                label="Updated At"
                key="updatedAt"
                disabled
                className={classes.input}
              />
            </div>
          )}
          <div>
            <Field
              component={TextField}
              type="text"
              name="type"
              label="Type"
              key="type"
              select={true}
              className={classes.input}
            >
              {Object.values(PhoneTypeEnum).map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Field>
          </div>
          <div>
            <Field
              component={TextField}
              name="color"
              type="text"
              label="Color"
              key="color"
              className={classes.input}
            />
          </div>
          <div>
            <Field
              component={TextField}
              name="serial"
              type="text"
              label="Serial"
              key="serial"
              className={classes.input}
            />
          </div>
          <div>
            <Field
              component={TextField}
              name="metadata"
              type="text"
              label="Metadata"
              key="metadata"
              className={classes.input}
            />
          </div>
          {isSubmitting && <LinearProgress />}
          <br />
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            {view === 'edit' ? 'Update' : 'Submit'}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default PhoneDetails;
